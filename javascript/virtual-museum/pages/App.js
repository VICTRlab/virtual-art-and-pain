import { useState } from 'react'
import BaselineForm from "./BaselineForm";
import OutcomeForm from "./OutcomeForm";
import Museum from "./Museum";
import SocialConnectPrime from './SocialConnectPrime';
import Tutorial from './Tutorial';
import BlankMuseum from './BlankMuseum';
import { useRouter } from 'next/Router';

export default function App() {
    const router = useRouter();

    const { id, group } = router.query

    const [finishBaseline, setFinishBaseline] = useState(false);
    const [finishOutcome1, setFinishOutcome1] = useState(false);
    const [finishSocialConn, setFinishSocialConn] = useState(false);
    const [finishTutorial, setFinishTutorial] = useState(false);
    const [finishMuseum1, setFinishMuseum1] = useState(false);
    const [finishOutcome2, setFinishOutcome2] = useState(false);
    const [finishMuseum2, setFinishMuseum2] = useState(false);
    const [finishOutcome3, setFinishOutcome3] = useState(false);

    function finishBaseLine() {
        setFinishBaseline(true);
    }
    function makeFullScreen() {
        //setFullScreen(true);
    }
    return (
        <div>
            <div>ID:{id}</div>
            <div>GROUP:{group}</div>
            {finishBaseline === false && (<BaselineForm submitSurvey={finishBaseLine} group={id} />)}
            {finishBaseline === true && finishOutcome1 === false && (<OutcomeForm submitSurvey={() => { setFinishOutcome1(true) }} />)}
            {finishOutcome1 === true && finishSocialConn === false && (<SocialConnectPrime submitSurvey={() => { setFinishSocialConn(true) }} />)}
            {finishSocialConn === true && finishTutorial === false && (
                <>
                    <div className=''>
                        <Tutorial makeFullScreen={makeFullScreen} />
                    </div>


                </>
            )}
            {finishTutorial === true && finishMuseum1 === false && (//M1
                <>
                    <div className='md:col-span-2 flex items-center justify-center h-screen'>
                        <Museum makeFullScreen={makeFullScreen} />
                    </div>
                    <div className='my-5 md:col-span-1 flex flex-col justify-left h-screen'>
                        <p className='text-md font-medium text-gray-900'>Movement</p>
                        <ul className='list-disc list-inside'>
                            <li className='py-1'>Mouse (or trackpad) to look around</li>
                            <li className='py-1'>W to move forward</li>
                            <li className='py-1'>A to move left</li>
                            <li className='py-1'>S to move right</li>
                            <li className='py-1'>D to move backwards</li>
                        </ul>
                        <p className='text-md font-medium text-gray-900'>Help</p>
                        <ul className='list-disc list-inside'>
                            <li className='py-1'>If you cannot move, try hitting escape.</li>
                        </ul>
                    </div>

                </>
            )}
            {finishMuseum1 === true && finishOutcome2 === false && <OutcomeForm submitSurvey={() => { setFinishOutcome2(true) }} />}
            {finishOutcome2 === true && finishMuseum2 === false && <BlankMuseum />}
            {finishMuseum2 === true && finishOutcome3 === false && <OutcomeForm submitSurvey={() => { setFinishOutcome3(true) }} />}
        </div>
    );
}



