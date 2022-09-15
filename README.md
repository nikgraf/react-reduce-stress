# react-reduce-stress

React comes with a lot of useful console logs and errors, but the ONE is missing. This package informs you when React.StrictMode is active and React will unmount and remount every component, whenever a component mounts for the first time.

<img width="669" alt="Screenshot of the console showing the hint" src="https://user-images.githubusercontent.com/223045/190421689-764f1f1a-2247-4a6f-864c-0f7c98f550e7.png">

## Install

```sh
yarn add react-reduce-stress
```

```tsx
import ReduceStress from "react-reduce-stress";

// just place it anywhere inside <React.StrictMode>
root.render(
  <React.StrictMode>
    <ReduceStress />
    <App />
  </React.StrictMode>
);
```

## Roadmap

Sometimes you just really want supress a React console error (when it comes from a package). In the future we provide a simple API to do so.
