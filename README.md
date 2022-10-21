# react-reduce-stress

React comes with a lot of useful console logs and errors, but the ONE is missing. This package informs you when React.StrictMode is active and React will unmount and remount every component, whenever a component mounts for the first time.

<img width="669" alt="Screenshot of the console showing the hint" src="https://user-images.githubusercontent.com/223045/190421689-764f1f1a-2247-4a6f-864c-0f7c98f550e7.png">

## Install

```sh
yarn add react-reduce-stress
```

```tsx
import { ReduceStress } from "react-reduce-stress";

// just place it anywhere inside <React.StrictMode>
root.render(
  <React.StrictMode>
    <ReduceStress />
    <App />
  </React.StrictMode>
);
```

## Supress Console Warnings/Errors usage

```tsx
supressConsoleWarnings({
  hooksOrder: ["NavigationHeader"], // hide warnings for hooks order for the NavigationHeader component
  uniqueKeyInList: ["AvatarGroup"], // hide warnings for unique key in list for the AvatarGroup component
  useNativeDriver: true, // hide warnings for useNativeDriver (React Native)
  setNativeProps: true, // hide warnings for setNativeProps (React Native)
});
```

Outcome: A peaceful Console at your discression for debugging.

<img width="739" alt="Screenshot of an empty Chrome console" src="https://user-images.githubusercontent.com/223045/197143952-fef64937-7c17-418f-a14e-3b47158bd1c9.png">

## Roadmap

If you have warning that really annoyes you, please open a pull-request and we will add it to the list.
