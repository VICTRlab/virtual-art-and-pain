import { getDatabase, ref, set } from "firebase/database";
import { Component } from 'react'
import FillinQuestion from './FillinQuestion';
import TextAreaWithWordLimit from "./TextAreaWithWordLimit";
import Timer from "./Timer";

const TEMP_ID = "SCP"
const WORD_LIMIT = 50
const WORD_MIN = 40

class SocialConnectPrime extends Component {
    constructor(props) {
        super(props);
        this.state = {
            a0_0: '',
            initialsEntered: false,
            p1done: false,
            timerExpired: false,
            currentWordCount: 0,
            wordcountReached: false,
        }
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleInitials = this.handleInitials.bind(this);
        this.handleExpire = this.handleExpire.bind(this);
        this.handleP1Done = this.handleP1Done.bind(this);
    }


    handleSubmit(event) {
        // alert('Form submitted: ' + TEMP_ID);
        this.writeData(this.props.userID, this.state);
        event.preventDefault();
        this.props.submitSurvey();
    }
    handleInitials() {
        if (this.state.a0_0.length > 0) {
            this.setState({ initialsEntered: true });
        } else {
            alert("Please enter someone's initials before submitting");
        }
        console.log(this.state)
    }
    handleP1Done() {
        this.setState({ p1done: true });
    }
    writeData(userID, state) {
        const db = getDatabase();
        set(ref(db, userID + '/SCP'), state);
    }
    handleExpire() {
        this.setState({ timerExpired: true });
        console.log(this.state);
    }
    render() {
        const time = new Date();
        time.setSeconds(time.getSeconds() + 300); // 10 minutes timer
        return (
            <div className="md:col-span-3 md:w-2/3 mx-auto">

                <div>
                    <div className="md:grid md:grid-cols-2 md:gap-6">

                        <div className="mt-5 md:mt-0 md:col-span-2">
                            <form
                                onKeyPress={(e) => { e.key === 'Enter' && e.preventDefault(); }}
                                onSubmit={this.handleSubmit} action="#" method="POST">
                                <div className="shadow sm:rounded-md sm:overflow-hidden">

                                    <div className="px-4 py-5 bg-white space-y-6 sm:p-6">
                                        <h1 className="block text-lg font-medium text-gray-700">Activity</h1>
                                        <div className="hidden sm:block" aria-hidden="true">
                                            <div className="py-2">
                                                <div className="border-t border-gray-300" />
                                            </div>
                                        </div>
                                        {this.state.initialsEntered === false &&
                                            <>
                                                <FillinQuestion
                                                    name="q0_0"
                                                    question="Think about a relationship that makes/made you feel socially connected. Picture in your mind
a person who made you feel loved and valued. Please provide the initials for that person:"
                                                    moreText="Once you submit, you won't be able to change your answer."
                                                    placeholder=""
                                                    onAnswerChange={(ans) => this.setState({ a0_0: ans })} />
                                                <input type="button" onClick={this.handleInitials} value="Submit" className='my-2 inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500' />
                                            </>
                                        }
                                        {this.state.initialsEntered === true && this.state.p1done === false &&
                                            <>

                                                <div className="grid grid-cols-3 gap-6 border border-purple-300 rounded-md p-2">

                                                    <div className="col-span-3 sm:col-span-2">

                                                        <div className="block text-md font-medium text-gray-700">
                                                            You entered the initials: <span className="text-lg">{this.state.a0_0}</span>
                                                        </div>

                                                    </div>
                                                </div>

                                                <TextAreaWithWordLimit
                                                    question="Try to get a visual image in your mind of this person. What is/was it like being with this
person? What is/was it about this person that made you feel seen, heard, and valued?"
                                                    moreText="You'll be able to submit once you reach at least 80 words or the timer runs out."
                                                    limit={WORD_LIMIT}
                                                    min={WORD_MIN}
                                                    currentWordCount={this.state.currentWordCount}
                                                    setWordCount={(wordCount) => this.setState({ currentWordCount: wordCount })}
                                                    value=""
                                                />
                                                <Timer
                                                    expiryTimestamp={time}
                                                    handleExpire={this.handleExpire} />
                                                {!this.state.timerExpired && this.state.currentWordCount < WORD_MIN &&
                                                    <input disabled={true} type="submit" value="Submit" className='opacity-40 my-2 inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600  focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500' />
                                                }
                                                {(this.state.timerExpired || this.state.currentWordCount >= WORD_MIN) &&
                                                    <input type="button" onClick={this.handleP1Done} value="Submit" className='my-4 inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500' />
                                                }
                                            </>
                                        }
                                        {this.state.p1done === true &&
                                            <>
                                                <div className="grid grid-cols-3 gap-6 border border-purple-300 rounded-md p-2">

                                                    <div className="col-span-3 sm:col-span-2">

                                                        <div className="block text-md font-medium text-gray-700">
                                                            You entered the initials: <span className="text-lg">{this.state.a0_0}</span>
                                                        </div>

                                                    </div>
                                                </div>

                                                <TextAreaWithWordLimit
                                                    question="Remember a specific occasion or anecdote with this person. On this specific occasion, what
did this person say or do that made you feel loved, cared for, and valued?"
                                                    moreText="You'll be able to submit once you reach at least 80 words or the timer runs out."
                                                    limit={WORD_LIMIT}
                                                    min={WORD_MIN}
                                                    currentWordCount={this.state.currentWordCount}
                                                    setWordCount={(wordCount) => this.setState({ currentWordCount: wordCount })}
                                                    value=""
                                                />
                                                <Timer
                                                    expiryTimestamp={time}
                                                    handleExpire={this.handleExpire} />
                                                {!this.state.timerExpired && this.state.currentWordCount < WORD_MIN &&
                                                    <input disabled={true} type="submit" value="Submit" className='opacity-40 my-2 inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600  focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500' />
                                                }
                                                {(this.state.timerExpired || this.state.currentWordCount >= WORD_MIN) &&
                                                    <input type="submit" value="Submit" className='my-4 inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500' />
                                                }
                                            </>}


                                    </div>

                                </div>


                            </form>
                        </div>
                    </div>
                </div >

                <div className="hidden sm:block" aria-hidden="true">
                    <div className="py-5">
                        <div className="border-t border-gray-200" />
                    </div>
                </div>


            </div >
        );
    }
}

export default SocialConnectPrime;