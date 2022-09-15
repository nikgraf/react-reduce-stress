import React from "react";

const identifier = "DO_NOT_USE_OR_YOU_WILL_BE_FIRED";

const getConsoleStyle = () => {
  return window.matchMedia &&
    window.matchMedia("(prefers-color-scheme: dark)").matches
    ? "color: red; line-height: 1.4; padding: 5px"
    : "color: #e10000; line-height: 1.4; padding: 5px";
};

const originalConsoleError = console.error;
console.error = (...args) => {
  if (
    typeof args[0] === "string" &&
    args[0].startsWith('Warning: A string ref, "%s", has been found within') &&
    args[1] === identifier
  ) {
    console.log(
      "%c🙀 ‼️ATTENTION‼️ 🙀\nBecause you are using StrictMode in development React will unmount and remount every component, whenever a component mounts for the first time. This means during this remounting useEffect and useLayoutEffect run twice.\nLearn more here why it's important:%chttps://reactjs.org/docs/strict-mode.html#ensuring-reusable-state",
      getConsoleStyle(),
      "line-height: 1.4; padding: 5px"
    );
  } else {
    originalConsoleError(...args);
  }
};

class InnerComponent extends React.Component {
  render() {
    return null;
  }
}

class OuterComponent extends React.Component {
  render() {
    return <InnerComponent ref={identifier} />;
  }
}

const ReduceStress: React.FC<{}> = () => {
  return <OuterComponent />;
};

export default ReduceStress;
