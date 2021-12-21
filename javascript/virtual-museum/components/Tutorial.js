import Unity, { UnityContext } from "react-unity-webgl";
import { useState, useEffect } from "react";
import Loading from "./Loading";
/*const unityContext2 = new UnityContext({
    loaderUrl: "Tutorial/Build/Tutorial.loader.js",
    dataUrl: "Tutorial/Build/Tutorial.data",
    frameworkUrl: "Tutorial/Build/Tutorial.framework.js",
    codeUrl: "Tutorial/Build/Tutorial.wasm",
});*/

let unityContext;

export default function Tutorial(props) {
    const [unityContext, setUnityContext] = useState(typeof window !== undefined ? new UnityContext({
        loaderUrl: "Build/Build/Build.loader.js",
        dataUrl: "Build/Build/Build.data",
        frameworkUrl: "Build/Build/Build.framework.js",
        codeUrl: "Build/Build/Build.wasm",
    }) : null);
    const [isLoaded, setIsLoaded] = useState(false);
    const [progression, setProgression] = useState(0);
    useEffect(function () {
        if (typeof window !== undefined) {
            unityContext.on("canvas", function (canvas) {
                canvas.width = 1080;
                canvas.height = 720;
            });
            unityContext.on("progress", function (progression) {
                setProgression(progression);
                console.log(progression);
            });
            unityContext.on("loaded", function () {
                setIsLoaded(true);
                unityContext.setFullscreen(true);
            });
            unityContext.on("quitted", function () { });
        }
    }, []);

    function makeFullScreen() {
        unityContext.setFullscreen(true);

    }
    return (
        <div className='flex flex-col'>
            {!isLoaded &&
                <>
                    <p>Loading: {Math.round(progression) * 100}%</p>
                    <Loading />

                </>
            }
            {typeof window !== undefined && unityContext !== null &&
                <Unity
                    unityContext={unityContext}
                    matchWebGLToCanvasSize={true}
                    style={{ width: "100%", visibility: isLoaded ? "visible" : "hidden" }}

                />
            }
        </div>
    );
}