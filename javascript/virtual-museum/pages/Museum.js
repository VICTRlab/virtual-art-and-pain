import Unity, { UnityContext } from "react-unity-webgl";
import { useEffect } from "react";

const unityContext = new UnityContext({
    loaderUrl: "Build/public.loader.js",
    dataUrl: "Build/public.data",
    frameworkUrl: "Build/public.framework.js",
    codeUrl: "Build/public.wasm",
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