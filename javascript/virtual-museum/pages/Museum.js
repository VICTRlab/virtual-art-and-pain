import Unity, { UnityContext } from "react-unity-webgl";

const unityContext = new UnityContext({
    loaderUrl: "Build/Builds.loader.js",
    dataUrl: "Build/Builds.data",
    frameworkUrl: "Build/Builds.framework.js",
    codeUrl: "Build/Builds.wasm",
});

export default function Museum() {
    return <Unity unityContext={unityContext} />;
}