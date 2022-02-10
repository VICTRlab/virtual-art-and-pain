import { useState, useEffect } from 'react';
import BaselineForm from "./BaselineForm";
import OutcomeForm from "./OutcomeForm";
import Museum from "../components/Museum";
import SocialConnectPrime from './SocialConnectPrime';
import Tutorial from '../components/Tutorial';
import Welcome from './Welcome';
//import BlankMuseum from './BlankMuseum';
import { useRouter } from 'next/router';
const userID = 'user' + Math.floor(Math.random()*2000000000); //yes i know bad design but gotta go fasttttttt
export default function App() {
    const router = useRouter();
    console.log(router.query)

    //const { id, group } = router.query
    const [finishWelcome, setFinishWelcome] = useState(false);
    const [finishBaseline, setFinishBaseline] = useState(false);
    const [finishOutcome, setFinishOutcome] = useState(false);
    const [finishSocialConn, setFinishSocialConn] = useState(false);
    const [finishTutorial, setFinishTutorial] = useState(false);
    const [finishMuseum, setFinishMuseum] = useState(false);

    
    
    const tutorial = {
        loaderUrl: "Tutorial/Build/Tutorial.loader.js",
        dataUrl: "Tutorial/Build/Tutorial.data",
        frameworkUrl: "Tutorial/Build/Tutorial.framework.js",
        codeUrl: "Tutorial/Build/Tutorial.wasm",
    }
    const museum = {
        loaderUrl: "Build2/Build/Build2.loader.js",
        dataUrl: "Build2/Build/Build2.data",
        frameworkUrl: "Build2/Build/Build2.framework.js",
        codeUrl: "Build2/Build/Build2.wasm",
    }
    return (
        <div>
            <div>{router.query.id}</div>
            <div>{router.query.group}</div>

            {finishWelcome === false &&                                 (<OutcomeForm userID={userID} submitSurvey={() => {setFinishWelcome(true)}} />)}
            {finishWelcome === true && finishBaseline === false &&      (<BaselineForm userID={userID} submitSurvey={() => {setFinishBaseline(true)}}/>)}
            {finishBaseline === true && finishSocialConn === false &&   (<SocialConnectPrime userID={userID} submitSurvey={() => { setFinishSocialConn(true) }} />)}
            {finishSocialConn === true && finishTutorial === false && (<Tutorial type='Tutorial' userID={userID} museumBuild = {tutorial} submitSurvey={() => { setFinishTutorial(true) }}/>)}
            {finishTutorial === true && finishMuseum === false && (<Tutorial type='Museum' userID={userID} museumBuild = {museum} submitSurvey={() => { setFinishMuseum(true) }}/>)}
            {finishMuseum === true && finishOutcome === false && (<OutcomeForm  userID={userID} submitSurvey={() => { setFinishOutcome(true) }}/>)}
        </div>
    );
}



