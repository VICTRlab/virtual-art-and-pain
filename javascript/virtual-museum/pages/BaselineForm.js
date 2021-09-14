import SubmitSurveyButton from "./SubmitSurveyButon"
import { getDatabase, ref, set } from "firebase/database";
import { useEffect, useState, Component } from "react";
import FillinQuestion from "./FillinQuestion";
import RadioQuestion from "./RadioQuestion";
import RadioGroup from "./RadioGroup";

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
            <div className="md:col-span-3 md:w-2/3 mx-auto">

                <div>
                    <div className="md:grid md:grid-cols-2 md:gap-6">

                        <div className="mt-5 md:mt-0 md:col-span-2">
                            <form onSubmit={this.handleSubmit} action="#" method="POST">
                                <div className="shadow sm:rounded-md sm:overflow-hidden">

                                    <div className="px-4 py-5 bg-white space-y-6 sm:p-6">
                                        <h1 className="block text-lg font-medium text-gray-700">Survey #1</h1>
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
                                            onAnswerChange={(ans) => this.setState({ a1_6: ans })}
                                            onAnswerChangeFTB={(ans) => this.setState({ a1_6FTB: ans })} />

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