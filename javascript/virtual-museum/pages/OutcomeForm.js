import { getDatabase, ref, set } from "firebase/database";
import { Component } from "react";
import FillinQuestion from "./FillinQuestion";
import RadioQuestion from "./RadioQuestion";
import RadioGroup from "./RadioGroup";
import RadioGrid from "./RadioGrid";
import SemanticDiff from "./SemanticDiff";

class OutcomeForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            q1: null,
            q2: null,
            q3: null,
            q4: null,
            q5: null,
            q6: null,
            q7: null,
            q8: null,
            q9: null,
            q10: null,
            q11: null,
            q12: null,
            q13: null,
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
        if (this.state.q1 === null ||
            this.state.q2 === null ||
            this.state.q3 === null ||
            this.state.q3.size < 12 ||
            this.state.q4 === null ||
            this.state.q5 === null ||
            this.state.q5.size < 4 ||
            this.state.q6 === null ||
            this.state.q7 === null ||
            this.state.q8 === null ||
            this.state.q9 === null ||
            this.state.q10 === null ||
            this.state.q11 === null ||
            this.state.q12 === null ||
            this.state.q13 === null ) {
                confirm('Please finish all questions before continuing.');
                return;     
            }
        this.writeData(this.props.userID);
        console.log(this.state);
        event.preventDefault();
        this.props.submitSurvey();
    }
    writeData(userID) {
        const db = getDatabase();
        set(ref(db, userID + '/Outcome'), this.state);
    }
    render() {

        return (
            <div>
                <div className="md:col-span-3 md:w-2/3 mx-auto">
                    <div className="md:grid md:grid-cols-2 md:gap-6">
                        <div className="mt-5 md:mt-0 md:col-span-2">
                            <form
                                onKeyPress={(e) => { e.key === 'Enter' && e.preventDefault(); }}
                                onSubmit={this.handleSubmit}
                                action="#"
                                method="POST">
                                <div className="shadow sm:rounded-md sm:overflow-hidden">

                                    <div className="px-4 py-5 bg-white space-y-6 sm:p-6">
                                        <h1 className="block text-lg font-medium text-gray-700">Survey #2</h1>
                                        <div className="hidden sm:block" aria-hidden="true">
                                            <div className="py-2">
                                                <div className="border-t border-gray-300" />
                                            </div>
                                        </div>
                                        <div className="grid grid-cols-6 gap-1">

                                        </div>

                                        <RadioGroup
                                            name="q1"
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
                                            onAnswerChange={(ans) => this.setState({ q1: ans })}
                                            onAnswerChangeFTB={(ans) => this.setState({ q1FTB: ans })} />
                                        <RadioGroup
                                            name="q2"
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
                                            onAnswerChange={(ans) => this.setState({ q2: ans })}
                                            onAnswerChangeFTB={(ans) => this.setState({ q2FTB: ans })} />

                                        <RadioGrid
                                            name="q3"
                                            answers={new Map()}
                                            question="Please rate the extent to which you feel the following feelings right now: "
                                            options={[
                                                { text: "Not at all\n1" },
                                                { text: "2" },
                                                { text: "Moderately\n3" },
                                                { text: "4" },
                                                { text: "Very Much\n5" },
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
                                            onAnswerChange={(ans) => this.setState({ q3: ans })}
                                        />
                                        <RadioQuestion
                                            name="q4"
                                            question="Did you experience any pain relief during your museum visit?"
                                            options={[{ text: "Yes" }, { text: "No" },]}
                                            onAnswerChange={(ans) => this.setState({ q4: ans })}
                                            onAnswerChangeFTB={(ans) => this.setState({ q4FTB: ans })} />
                                        {this.state.q4 === 'Yes' &&
                                            <RadioQuestion
                                                name="q4_5"
                                                question="If you answered Yes to the question above, then what percent pain relief did you experience?"
                                                options={[
                                                    { text: "0% No relief" }, 
                                                    { text: "10%" }, 
                                                    { text: "20%" }, 
                                                    { text: "30%" }, 
                                                    { text: "40%" }, 
                                                    { text: "50%" },
                                                    { text: "60%" },
                                                    { text: "70%" },
                                                    { text: "80%" },
                                                    { text: "90%" },
                                                    { text: "100% Complete Relief" },]}
                                                onAnswerChange={(ans) => this.setState({ q4_5: ans })} />
                                        }
                                        <SemanticDiff
                                            name="q5"
                                            answers={new Map()}
                                            question=" The artwork in the museum made me feel"
                                            options={[
                                                {num : "1"},
                                                {num : "2"},
                                                {num : "3"},
                                                {num : "4"},
                                                {num : "5"},
                                                {num : "6"},
                                                {num : "7"},
                                            ]}
                                            bounds = {[
                                                { num: "1", left: "Negative about social the world", right: "Positive about social the world"},
                                                { num: "2", left: "Disconnected to the social world", right: "Connected to the social world" },
                                                { num: "3", left: "Excluded from the social world", right: "Included in the social world" },
                                                { num: "4", left: "Negative about my social relationships", right: "Positive about my social relationships" },
                                            ]}
                                            onAnswerChange={(ans) => this.setState({ q5: ans })}
                                        />

                                        <RadioQuestion
                                            name="q6"
                                            question="To which gender do you most identify?"
                                            options={[{ text: "Female" }, { text: "Male" }, { text: "Non-binary/third gender" }, { text: "Prefer to self describe: ", fillIn: true }, { text: "Prefer not to answer" }]}
                                            onAnswerChange={(ans) => this.setState({ q6: ans })}
                                            onAnswerChangeFTB={(ans) => this.setState({ q6FTB: ans })} />

                                        <FillinQuestion
                                            name="q7"
                                            question="What is your age?"
                                            placeholder="Age"
                                            onAnswerChange={(ans) => this.setState({ q7: ans })} />

                                        <RadioQuestion name="q8"
                                            question="Do you consider yourself do be Hispanic or Latino/Latina? (Check one box)"
                                            options={[{ text: "No" }, { text: "Yes" }, { text: "Unknown" }, { text: "Prefer not to answer" }]}
                                            onAnswerChange={(ans) => this.setState({ q8: ans })}
                                            onAnswerChangeFTB={(ans) => this.setState({ q8FTB: ans })} />
                                        <RadioQuestion name="q9"
                                            question="Education level (Select highest level attained)"
                                            options={[
                                                { text: "No high school diploma" },
                                                { text: "High school graduate or GED" },
                                                { text: "Some college, no degree" },
                                                { text: "Occupational/technical/vocational program" },
                                                { text: "Master's degree (e.g. M.A., M.S., M.B.A)" },
                                                { text: "Professional school degree (e.g. M.D., D.D.S., D.V.M., J.D.)" }]}
                                            onAnswerChange={(ans) => this.setState({ q9: ans })}
                                            onAnswerChangeFTB={(ans) => this.setState({ q9FTB: ans })} />
                                        <RadioQuestion name="q10"
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
                                            onAnswerChange={(ans) => this.setState({ q10: ans })}
                                            onAnswerChangeFTB={(ans) => this.setState({ q10FTB: ans })} />
                                            <RadioQuestion name="q11"
                                            question="Has your health care provider diagnosed your pain condition? (Check one box)"
                                            options={[
                                                { text: "No" },
                                                { text: "Yes" },

                                            ]}
                                            onAnswerChange={(ans) => this.setState({ q11: ans })}
                                            onAnswerChangeFTB={(ans) => this.setState({ q11FTB: ans })} />
                                        {this.state.q11 === 'Yes' &&
                                            <FillinQuestion
                                                name="q11_5"
                                                question="If yes, what is the diagnosis or diagnoses for your pain condition or conditions? (write in your answer)"
                                                placeholder=""
                                                onAnswerChange={(ans) => this.setState({ q11_5: ans })} />
                                        }
                                         <RadioQuestion name="q12"
                                            question="In general, would you say your health is...? (Check one box below)"
                                            options={[
                                                { text: "Excellent" },
                                                { text: "Very good" },
                                                { text: "Good" },
                                                { text: "Fair" },
                                                { text: "Poor" }
                                            ]}
                                            onAnswerChange={(ans) => this.setState({ q12: ans })}
                                            onAnswerChangeFTB={(ans) => this.setState({ q12FTB: ans })} />

                                        <RadioQuestion name="q13"
                                            question="How often did you visit an art museum last year?"
                                            options={[
                                                { text: "None" },
                                                { text: "1 times" },
                                                { text: "2 times" },
                                                { text: "3 times" },
                                                { text: "More than 3 times" },
                                            ]}
                                            onAnswerChange={(ans) => this.setState({ q13: ans })}
                                            onAnswerChangeFTB={(ans) => this.setState({ q13FTB: ans })} />
                                    </div>

                                </div>

                                <input type="button" onClick={this.handleSubmit} value="SUBMIT" className='my-4 inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500' />
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
export default OutcomeForm;