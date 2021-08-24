import Unity, { UnityContext } from "react-unity-webgl";
import { useEffect } from "react";

const unityContext = new UnityContext({
    loaderUrl: "Build/Builds.loader.js",
    dataUrl: "Build/Builds.data",
    frameworkUrl: "Build/Builds.framework.js",
    codeUrl: "Build/Builds.wasm",
});


export default function Museum() {
    useEffect(function () {
        unityContext.on("canvas", function (canvas) {
            canvas.width = 960;
            canvas.height = 720;
        });
    }, []);

    return (
        <Unity
            unityContext={unityContext}
            matchWebGLToCanvasSize={false}
            style={{ width: "960px", height: "720px" }}
        />
    );
}