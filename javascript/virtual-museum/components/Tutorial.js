import Unity, { UnityContext } from "react-unity-webgl";
import { useState, useEffect } from "react";
import { getDatabase, ref, set } from "firebase/database";
import Loading from "./Loading";
/*const unityContext2 = new UnityContext({
    loaderUrl: "Tutorial/Build/Tutorial.loader.js",
    dataUrl: "Tutorial/Build/Tutorial.data",
    frameworkUrl: "Tutorial/Build/Tutorial.framework.js",
    codeUrl: "Tutorial/Build/Tutorial.wasm",
});*/

let unityContext;
const TEMP_ID = "TUT";

export default function Tutorial(props) {
    const [unityContext, setUnityContext] = useState(typeof window !== undefined ? new UnityContext({
        loaderUrl: "Build/Build/Build.loader.js",
        dataUrl: "Build/Build/Build.data",
        frameworkUrl: "Build/Build/Build.framework.js",
        codeUrl: "Build/Build/Build.wasm",
    }) : null);
    const [isLoaded, setIsLoaded] = useState(false);
    const [progression, setProgression] = useState(0);

    const [isGameOver, setIsGameOver] = useState(false);
    //const [userName, setUserName] = useState("");
    //const [score, setScore] = useState(0);
    const cleanupAndExit = (data) => {
        console.log(data);
        const dstr = data.toString();
        const remPer = dstr.replaceAll('.', ' ');
        const jsonData = JSON.parse(remPer);
        console.log(jsonData);
        writeData(TEMP_ID, jsonData);
        props.submitSurvey();
    }
    const writeData = (userID, data) => {
        const db = getDatabase();
        set(ref(db, 'users/' + userID + "/Museum"), data);
    }
    useEffect(function () {
        if (typeof window !== undefined) {
            unityContext.send("GameManager", "SetUUID", props.uuid);

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
            unityContext.on("quitted", function () {

            });
            unityContext.on("GameOver", function (data) {
                console.log("GameOver react event invoked" + " " + data);
                cleanupAndExit(data)
                
            });
        }
    }, []);

    return (
        <div className='flex flex-col'>
            {!isLoaded &&
                <>
                    <p>Loading: {Math.round(progression) * 100}%</p>
                    <Loading />

                </>
            }
            {isGameOver !== true && typeof window !== undefined && unityContext !== null &&
                <Unity
                    unityContext={unityContext}
                    matchWebGLToCanvasSize={true}
                    style={{ width: "100%", visibility: isLoaded ? "visible" : "hidden" }}
                />
            }
        </div>
    );
}