import Unity, { UnityContext } from "react-unity-webgl";
import { useState, useEffect } from "react";
import { getDatabase, ref, set } from "firebase/database";
import Loading from "./Loading";

let unityContext;

export default function Tutorial(props) {
    const [unityContext, setUnityContext] = useState(typeof window !== undefined ? new UnityContext(props.museumBuild) : null);
    const [isLoaded, setIsLoaded] = useState(false);
    const [progression, setProgression] = useState(0);
    const [isGameOver, setIsGameOver] = useState(false);
    const cleanupAndExit = (data) => {
        console.log(data);
        if(data === "TUTORIAL COMPLETED") {
            props.submitSurvey();
            return;
        }
        const dstr = data.toString();
        const remPer = dstr.replaceAll('.', ' ');
        console.log(remPer)
        const jsonData = JSON.parse(remPer);
        console.log(jsonData);
        writeData(props.userID, jsonData);
        props.submitSurvey();
    }
    const writeData = (userID, data) => {
        const db = getDatabase();
        if(props.type === 'Museum') {
            set(ref(db, userID + "/" + props.type), data);
        }
    }
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