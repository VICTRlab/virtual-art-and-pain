import SubmitSurveyButton from "./SubmitSurveyButon"
import { getDatabase, ref, set } from "firebase/database";
import { useEffect, useState, Component } from "react";
import FillinQuestion from "./FillinQuestion";
import RadioQuestion from "./RadioQuestion";
import RadioGroup from "./RadioGroup";
import RadioGrid from "./RadioGrid";
import TextAreaWithWordLimit from "./TextAreaWithWordLimit";
const TEMP_ID = "AABBCC" + Date.now();
class BaselineForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            a1_1: '',
            
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleOptionChange = this.handleOptionChange.bind(this);
    }
    handleChange(event) {
        const val = event.target.name
        //console.log(val);\
        this.setState({ [val]: event.target.value });
        console.log(this.state);
    }
    handleOptionChange(event) {
        this.setState({
            selectedOption: event.target.value
        })
    }

    handleSubmit(event) {
        //alert('Form submitted: ' + TEMP_ID);
        console.log(this.state);
        this.writeData(TEMP_ID, this.answers);
        event.preventDefault();
        
        this.props.submitSurvey();
    }
    writeData(userID, ans_) {
        const db = getDatabase();
        //console.log('Writing:\n' + this.state);
        set(ref(db, 'users/' + userID + "/Baseline"), this.state);
    }
    render() {

        return (
            <div className="my-5 md:col-span-3 md:w-2/3 mx-auto">
                <div>
                    <div className="md:grid md:grid-cols-2 md:gap-6">

                        <div className="mt-5 md:mt-0 md:col-span-2">
                            <div>{this.props.id}</div>
                            <form
                                onKeyPress={(e) => { e.key === 'Enter' && e.preventDefault(); }}
                                onSubmit={this.handleSubmit}
                                action="#"
                                method="POST">
                                <div className="shadow md:rounded-md sm:overflow-hidden">

                                    <div className="px-4 py-5 bg-white space-y-6 sm:p-6">
                                        <h1 className="block text-lg font-medium text-gray-700">Survey #1</h1>
                                        <div className="hidden sm:block" aria-hidden="true">
                                            <div className="py-2">
                                                <div className="border-t border-gray-300" />
                                            </div>
                                        </div>

                                        

                                       
                                        

                                        <RadioGroup
                                            name="q3_1"
                                            question="What is your pain intensity right now?"
                                            leftBound="No Pain"
                                            rightBound="Worst Pain Imaginable"
                                            options={[
                                                { text: "0" },
                                                { text: "1" },
                                                { text: "2" },
                                                { text: "3" },
                                                { text: "4" },
                                                { text: "5" },
                                                { text: "6" },
                                                { text: "7" },
                                                { text: "8" },
                                                { text: "9" },
                                                { text: "10" },
                                            ]}
                                            onAnswerChange={(ans) => this.setState({ a3_1: ans })}
                                            onAnswerChangeFTB={(ans) => this.setState({ a3_1FTB: ans })} />
                                        <RadioGroup
                                            name="q3_2"
                                            question="How unpleasant is your pain right now?"
                                            leftBound="No Pain"
                                            rightBound="Most Unpleasant Sensation Imaginable (Intolerable)"
                                            moreText="Remember, pain can have a low intensity, but still feel extremely unpleasant, and some kinds of pain can have a high intensity but can be very tolerable. With this scale, please tell us how unpleasant your pain is. Please mark only one of the circles below."
                                            options={[
                                                { text: "0" },
                                                { text: "1" },
                                                { text: "2" },
                                                { text: "3" },
                                                { text: "4" },
                                                { text: "5" },
                                                { text: "6" },
                                                { text: "7" },
                                                { text: "8" },
                                                { text: "9" },
                                                { text: "10" },
                                            ]}
                                            onAnswerChange={(ans) => this.setState({ a3_2: ans })}
                                            onAnswerChangeFTB={(ans) => this.setState({ a3_2FTB: ans })} />
                                        <RadioGrid
                                            name="q3_5"
                                            question="Please rate the extent to which you feel the following feelings right now: "
                                            answers={new Map()}
                                            options={[
                                                { text: "1\nNot at all" },
                                                { text: "2" },
                                                { text: "3\nModerately" },
                                                { text: "4" },
                                                { text: "5\nVery Much" },
                                            ]}
                                            subQuestions={[
                                                { num: "1", text: "I feel like being around other people" },
                                                { num: "2", text: "I feel like being alone" },
                                                { num: "3", text: "I feel overly sensitive around others (e.g. my feelings are easily hurt)" },
                                                { num: "4", text: "I feel connected to others" },
                                                { num: "5", text: "I feel disconnected to others" },
                                                { num: "6", text: "I feel in tune with the people around me" },
                                                { num: "7", text: "I feel lonely" },
                                                { num: "8", text: "I feel liked" },
                                                { num: "9", text: "I feel outgoing and friendly" },
                                                { num: "10", text: "I feel alone" },
                                                { num: "11", text: "I feel isolated from others" },
                                                { num: "12", text: "I feel shy" },
                                            ]}
                                            onAnswerChange={(ans) => this.setState({ a3_5: ans })}
                                        />
                                        <RadioGroup
                                            name="q3_3"
                                            question="What number best describes how, in the last week, pain has interfered with your general activity?"
                                            leftBound="Does not interfere"
                                            rightBound="Completely interferes"
                                            moreText=""
                                            options={[
                                                { text: "0" },
                                                { text: "1" },
                                                { text: "2" },
                                                { text: "3" },
                                                { text: "4" },
                                                { text: "5" },
                                                { text: "6" },
                                                { text: "7" },
                                                { text: "8" },
                                                { text: "9" },
                                                { text: "10" },
                                            ]}
                                            onAnswerChange={(ans) => this.setState({ a3_3: ans })}
                                            onAnswerChangeFTB={(ans) => this.setState({ a3_3FTB: ans })} />
                                        <RadioGroup
                                            name="q3_4"
                                            question="What number best describes how, in the last week, pain has interfered with your enjoyment of life?"
                                            leftBound="Does not interfere"
                                            rightBound="Completely interferes"
                                            moreText=""
                                            options={[
                                                { text: "0" },
                                                { text: "1" },
                                                { text: "2" },
                                                { text: "3" },
                                                { text: "4" },
                                                { text: "5" },
                                                { text: "6" },
                                                { text: "7" },
                                                { text: "8" },
                                                { text: "9" },
                                                { text: "10" },
                                            ]}
                                            onAnswerChange={(ans) => this.setState({ a3_4: ans })}
                                            onAnswerChangeFTB={(ans) => this.setState({ a3_4FTB: ans })} />
                                        
                                    </div>

                                </div>

                                <input type="submit" value="SUBMIT" className='my-2 inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500' />
                            </form>
                        </div>
                    </div>
                </div>

                <div className="hidden sm:block" aria-hidden="true">
                    <div className="py-5">
                        <div className="border-t border-gray-200" />
                    </div>
                </div>


            </div>
        )
    }
}
export default BaselineForm;