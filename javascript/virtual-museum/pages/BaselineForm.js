import SubmitSurveyButton from "./SubmitSurveyButon"
import { getDatabase, ref, set } from "firebase/database";
import { useEffect, useState, Component } from "react";
import FillinQuestion from "./FillinQuestion";
import RadioQuestion from "./RadioQuestion";
import RadioGroup from "./RadioGroup";
import RadioGrid from "./RadioGrid";
const TEMP_ID = "AABBCC"
class BaselineForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            a1_1: '',
            a2_3: '',
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    handleChange(event) {
        const val = event.target.name
        console.log(val);
        this.setState({ [val]: event.target.value });
    }
    handleOptionChange(event) {
        this.setState({
            selectedOption: event.target.value
        })
    }

    handleSubmit(event) {
        //alert('Form submitted: ' + TEMP_ID);
        this.writeData(TEMP_ID);
        event.preventDefault();
        this.props.submitSurvey();
    }
    writeData(userID) {
        const db = getDatabase();
        set(ref(db, 'users/' + userID), this.state);
    }
    render() {

        return (
            <div className="my-5 md:col-span-3 md:w-2/3 mx-auto">

                <div>
                    <div className="md:grid md:grid-cols-2 md:gap-6">

                        <div className="mt-5 md:mt-0 md:col-span-2">
                            <form onSubmit={this.handleSubmit} action="#" method="POST">
                                <div className="shadow md:rounded-md sm:overflow-hidden">

                                    <div className="px-4 py-5 bg-white space-y-6 sm:p-6">
                                        <h1 className="block text-lg font-medium text-gray-700">Demographics</h1>
                                        <div className="hidden sm:block" aria-hidden="true">
                                            <div className="py-2">
                                                <div className="border-t border-gray-300" />
                                            </div>
                                        </div>

                                        <RadioQuestion
                                            name="q1_2"
                                            question="To which gender do you most identify?"
                                            options={[{ text: "Female" }, { text: "Male" }, { text: "Non-binary/third gender" }, { text: "Prefer to self describe: ", fillIn: true }, { text: "Prefer not to answer" }]}
                                            onAnswerChange={(ans) => this.setState({ a1_2: ans })}
                                            onAnswerChangeFTB={(ans) => this.setState({ a1_2FTB: ans })} />

                                        <FillinQuestion
                                            name="q1_3"
                                            question="What is your age?"
                                            placeholder="Age"
                                            onAnswerChange={(ans) => this.setState({ a1_3: ans })} />

                                        <RadioQuestion name="q1_4"
                                            question="Do you consider yourself do be Hispanic or Latinx? (Check one box)"
                                            options={[{ text: "No" }, { text: "Yes" }, { text: "Unknown" }, { text: "Prefer not to answer" }]}
                                            onAnswerChange={(ans) => this.setState({ a1_4: ans })}
                                            onAnswerChangeFTB={(ans) => this.setState({ a1_4FTB: ans })} />
                                        <RadioQuestion name="q1_6"
                                            question="Education level (Select highest level attained)"
                                            options={[
                                                { text: "No high school diploma" },
                                                { text: "High school graduate or GED" },
                                                { text: "Some college, no degree" },
                                                { text: "Occupational/technical/vocational program" },
                                                { text: "Master's degree (e.g. M.A., M.S., M.B.A)" },
                                                { text: "Professional school degree (e.g. M.D., D.D.S., D.V.M., J.D.)" }]}
                                            onAnswerChange={(ans) => this.setState({ a1_6: ans })}
                                            onAnswerChangeFTB={(ans) => this.setState({ a1_6FTB: ans })} />
                                        <RadioQuestion name="q1_7"
                                            question="Employment status"
                                            options={[
                                                { text: "Working now" },
                                                { text: "Looking for work" },
                                                { text: "Sick leave or maternity leave" },
                                                { text: "Disabled due to pain, permenantly or temporarily" },
                                                { text: "Disabled for reasons other than back pain" },
                                                { text: "Student" },
                                                { text: "Temporarily laid off" },
                                                { text: "Retired" },
                                                { text: "Keeping the house" },
                                                { text: "Other, specify", fillIn: true },
                                                { text: "Unknown" },
                                            ]}
                                            onAnswerChange={(ans) => this.setState({ a1_7: ans })}
                                            onAnswerChangeFTB={(ans) => this.setState({ a1_7FTB: ans })} />

                                        <RadioQuestion name="q1_8"
                                            question="In general, would you say your health is...? (Check one box below)"
                                            options={[
                                                { text: "Excellent" },
                                                { text: "Very good" },
                                                { text: "Good" },
                                                { text: "Fair" },
                                                { text: "Poor" }
                                            ]}
                                            onAnswerChange={(ans) => this.setState({ a1_8: ans })}
                                            onAnswerChangeFTB={(ans) => this.setState({ a1_8FTB: ans })} />

                                        <RadioQuestion name="q1_10"
                                            question="How often did you visit an art museum last year?"
                                            options={[
                                                { text: "None" },
                                                { text: "1 times" },
                                                { text: "2 times" },
                                                { text: "3 times" },
                                                { text: "More than 3 times" },

                                            ]}
                                            onAnswerChange={(ans) => this.setState({ a1_10: ans })}
                                            onAnswerChangeFTB={(ans) => this.setState({ a1_10FTB: ans })} />
                                        <RadioQuestion name="q2_3"
                                            question="Has your health care provider diagnosed your pain condition? (Check one box)"
                                            options={[
                                                { text: "No" },
                                                { text: "Yes" },

                                            ]}
                                            onAnswerChange={(ans) => this.setState({ a2_3: ans })}
                                            onAnswerChangeFTB={(ans) => this.setState({ a2_3FTB: ans })} />
                                        {this.state.a2_3 === 'Yes' &&
                                            <FillinQuestion
                                                name="q2_4"
                                                question="If yes, what is the diagnosis or diagnoses for your pain condition or conditions? (write in your answer)"
                                                placeholder=""
                                                onAnswerChange={(ans) => this.setState({ a2_4: ans })} />
                                        }

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
                                        <RadioGrid
                                            name="q3_7"
                                            question="Everyone experiences painful situations at some point in their lives. Such experiences may include headaches, tooth pain, joint or muscle pain. People are often exposed to situations that may cause pain such as illness, injury, dental procedures or surgery."
                                            moreText="We are interested in the types of thoughts and feelings that you have when you are in pain. Listed below are thirteen statements describing different thoughts and feelings that may be associated with pain. Using the following scale, please indicate the degree to which you have these thoughts and feelings when you are experiencing pain."
                                            options={[
                                                { text: "0\nNot at all" },
                                                { text: "1\nto a slight degree" },
                                                { text: "2\nto a moderate degree" },
                                                { text: "3\nto a great degree" },
                                                { text: "4\nall the time" },
                                            ]}

                                            subQuestions={[
                                                { num: "1", text: "I worry all the time about whether the pain will end." },
                                                { num: "2", text: "I feel I can't go on." },
                                                { num: "3", text: "It's terrible and I think it's never going to get any better." },
                                                { num: "4", text: "It's awful and I fell that it overwhelms me." },
                                                { num: "5", text: "I feel I can't stand it anymore." },
                                                { num: "6", text: "I become afraid that the pain will get worse." },
                                                { num: "7", text: "I keep thinking of other painful events." },
                                                { num: "8", text: "I anxiously want the pain to go away." },
                                                { num: "9", text: "I can't seem to keep it out of my mind." },
                                                { num: "10", text: "I keep thinking about how much it hurts." },
                                                { num: "11", text: "I keep thinking about how badly I want the pain to stop." },
                                                { num: "12", text: "There's nothing I can do to reduce the intensity of the pain." },
                                                { num: "13", text: "I wonder whether something serious may happen." },
                                            ]}
                                            onAnswerChange={(ans) => this.setState({ a3_5: ans })}
                                        />
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