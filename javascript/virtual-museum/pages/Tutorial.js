import Unity, { UnityContext } from "react-unity-webgl";
import { useState, useEffect } from "react";

const unityContext = new UnityContext({
    loaderUrl: "Tutorial/Build/public.loader.js",
    dataUrl: "Tutorial/Build/public.data",
    frameworkUrl: "Tutorial/Build/public.framework.js",
    codeUrl: "Tutorial/Build/public.wasm",
});


export default function Tutorial(props) {

    const [isLoaded, setIsLoaded] = useState(false);
    useEffect(function () {
        //unityContext.setFullscreen(true);
        unityContext.on("canvas", function (canvas) {
            canvas.width = 1080;
            canvas.height = 720;
        });
        unityContext.on("loaded", function () {
            setIsLoaded(true);
            unityContext.setFullscreen(true);
        });
    }, []);
    function makeFullScreen() {
        unityContext.setFullscreen(true);

    }
    return (
        <div className='flex flex-col'>

            <Unity
                unityContext={unityContext}
                matchWebGLToCanvasSize={false}
                style={{ width: "720px", height: "480px", visibility: isLoaded ? "visible" : "hidden" }}

            />
            <button
                onClick={makeFullScreen}
                className='inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-none text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500'
            >
                Full Screen</button>
        </div>
    );
}