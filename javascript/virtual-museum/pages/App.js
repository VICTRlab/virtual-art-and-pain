import { useState, useEffect } from 'react'
import BaselineForm from "./BaselineForm";
import OutcomeForm from "./OutcomeForm";
import Museum from "../components/Museum";
import SocialConnectPrime from './SocialConnectPrime';
import Tutorial from '../components/Tutorial';
import Welcome from './Welcome';
//import BlankMuseum from './BlankMuseum';
import { useRouter } from 'next/router';
//import { useState, useEffect } from "react";
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
    //const [finishOutcome2, setFinishOutcome2] = useState(false);
    //const [finishMuseum2, setFinishMuseum2] = useState(false);
    //const [finishOutcome3, setFinishOutcome3] = useState(false);

    const uuid = "someUniqueID"

    function makeFullScreen() {
        //setFullScreen(true);
    }
    
    return (
        <div>
            <div>{router.query.id}</div>
            <div>{router.query.group}</div>

            {finishWelcome === false &&                                 (<Welcome submitSurvey={() => {setFinishWelcome(true)}} />)}
            {finishWelcome === true && finishBaseline === false &&      (<BaselineForm submitSurvey={() => {setFinishBaseline(true)}}/>)}
            {finishBaseline === true && finishSocialConn === false &&   (<SocialConnectPrime submitSurvey={() => { setFinishSocialConn(true) }} />)}
            {finishSocialConn === true && finishTutorial === false && (<Tutorial uuid={uuid} submitSurvey={() => { setFinishTutorial(true) }}/>)}
            
            {finishTutorial === true && finishMuseum === false && (<Tutorial uuid={uuid} submitSurvey={() => { setFinishMuseum(true) }}/>)}
            {finishMuseum === true && finishOutcome === false && <OutcomeForm outcomeCount={2} submitSurvey={() => { setFinishOutcome(true) }} />}
        </div>
    );
}



