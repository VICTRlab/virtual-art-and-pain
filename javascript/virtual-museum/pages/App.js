import BaselineForm from "./BaselineForm";
import SubmitSurveyButton from "./SubmitSurveyButon";
import { useState } from 'react'
import Museum from "./Museum";
export default function App() {

    const [submit, setSurveySubmitted] = useState(false);

    function finishBaseLine() {
        setSurveySubmitted(true);
    }
    function makeFullScreen() {
        //setFullScreen(true);
    }
    return (
        <div className='md:grid md:grid-cols-3 md:gap-6 bg-gray-100 w-full py-5'>
            {submit === true && (
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
            {submit === false && (
                <div className='md:col-span-3 md:w-1/2 mx-auto'>
                    <BaselineForm />
                    <SubmitSurveyButton submitSurvey={finishBaseLine} />
                </div>
            )}

        </div>
    );
}



