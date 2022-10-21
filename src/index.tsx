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

export type SupressWarningsConfig = {
  hooksOrder: string[];
  uniqueKeyInList: string[];
  useNativeDriver: boolean;
  setNativeProps: boolean;
};

export const supressConsoleWarnings = (config: SupressWarningsConfig) => {
  const originalConsoleError = console.error;
  console.error = (...args) => {
    try {
      if (
        (config.hooksOrder &&
          args[0] &&
          typeof args[0] === "string" &&
          args[0].includes(
            "Warning: React has detected a change in the order of Hooks called by %s"
          ) &&
          args[1] &&
          config.hooksOrder.some((componentName) => {
            return args[1].includes(componentName);
          })) ||
        (config.uniqueKeyInList &&
          args[0] &&
          args[0].includes(
            'Warning: Each child in a list should have a unique "key" prop.'
          ) &&
          args[1] &&
          typeof args[1] === "string" &&
          config.uniqueKeyInList.some((componentName) => {
            return args[1].includes(componentName);
          }))
      ) {
        // ignored
      } else {
        originalConsoleError(...args);
      }
    } catch {
      originalConsoleError(...args);
    }
  };

  const originalConsoleWarn = console.warn;
  console.warn = (...args) => {
    try {
      if (
        (config.useNativeDriver &&
          args[0] &&
          typeof args[0] === "string" &&
          args[0].includes(
            "Animated: `useNativeDriver` is not supported because the native animated module is missing. Falling back to JS-based animation."
          )) ||
        (config.setNativeProps &&
          args[0] &&
          typeof args[0] === "string" &&
          args[0].includes(
            "setNativeProps is deprecated. Please update props using React state instead."
          ))
      ) {
        // ignored
      } else {
        originalConsoleWarn(...args);
      }
    } catch {
      originalConsoleWarn(...args);
    }
  };
};
