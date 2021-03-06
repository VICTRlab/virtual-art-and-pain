import Unity, { UnityContext } from "react-unity-webgl";
import { useState, useEffect } from "react";

export default function Museum(props) {
    const [unityContext, setUnityContext] = useState(new UnityContext({
        loaderUrl: "Build/public.loader.js",
        dataUrl: "Build/public.data",
        frameworkUrl: "Build/public.framework.js",
        codeUrl: "Build/public.wasm",
    }));
    const [isLoaded, setIsLoaded] = useState(false);
    const [progression, setProgression] = useState(0);

    useEffect(function () {
        //unityContext.setFullscreen(true);
        unityContext.on("canvas", function (canvas) {
            canvas.width = 1080;
            canvas.height = 720;
        });
        unityContext.on("progress", function (progression) {
            setProgression(progression);
        });
        /*unityContext.on("loaded", function () {
            setIsLoaded(true);
            unityContext.setFullscreen(true);
        });*/
    }, []);
    function makeFullScreen() {
        unityContext.setFullscreen(true);

    }

    return (
        <div className='flex flex-col'>

            <p>Loading {progression * 100} ... </p>
            {unityContext !== null &&
                <Unity
                    unityContext={unityContext}
                    matchWebGLToCanvasSize={false}
                    style={{ width: "100%", visibility: isLoaded ? "visible" : "hidden" }}

                />
            }
            <button
                onClick={makeFullScreen}
                className='inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-none text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500'
            >
                Full Screen</button>
        </div>
    );
}