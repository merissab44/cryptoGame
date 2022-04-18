// Creating a react component to load a unity game using webgl

import React from "react";
import Unity, { UnityContext } from "react-unity-webgl";
import Home from "./components/Home";

const unityContext = new UnityContext({
  // importing files from public/buildUnity

  loaderUrl: "buildUnity/First_Build_1.loader.js",
  dataUrl: "buildUnity/First_Build_1.data",
  frameworkUrl: "buildUnity/First_Build_1.framework.js",
  codeUrl: "buildUnity/First_Build_1.wasm",
});

function App() {
  return <Home/>;
}

export default App;

