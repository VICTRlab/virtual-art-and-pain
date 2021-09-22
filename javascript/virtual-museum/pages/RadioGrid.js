import { Component } from "react";

export default class RadioGrid extends Component {
    constructor(props) {
        super(props);
        this.handleChange = this.handleChange.bind(this);
        this.handleChangeFTB = this.handleChangeFTB.bind(this);
        this.state = { answer: '' };
    }
    handleChange(e) {
        this.props.onAnswerChange(e.target.value);
    }
    handleChangeFTB(e) {
        this.props.onAnswerChangeFTB(e.target.value);
    }
    render() {
        const options = this.props.options;
        const subQuestions = this.props.subQuestions;
        return (
            <div className="border border-purple-300 rounded-md p-2">
                <legend className="my-2 block text-md font-medium text-gray-700">
                    {this.props.question}
                </legend>
                <p className="my-5 text-md text-gray-600">{this.props.moreText}</p>
                <div className="grid grid-cols-10 gap-1 bg-gray-50 w-full py-5">
                    <div className="col-span-4">
                        <legend className="block text-md font-medium text-gray-700">

                        </legend>

                    </div>
                    {this.props.options && options.map((option) => (
                        <div className="inline-block text-center mx-1" key={option.text}>
                            {option.text.split('\n').map((str,index) => <p key={index}>{str}</p>)}
                        </div>))
                    }

                </div>

                {this.props.subQuestions && subQuestions.map((subQuestion) => (
                    <div key={subQuestion.text}>
                        <fieldset>
                            <div className="border-t grid grid-cols-10 gap-1 bg-gray-20 w-full ">
                                <div className="col-span-4">
                                    <legend className="my-2 block text-md font-medium text-gray-700">
                                        {subQuestion.text}
                                    </legend>

                                </div>
                                {this.props.options && options.map((option) => (
                                    <div className="border-r inline-block text-center" key={subQuestion.num}>
                                        <input
                                            name={subQuestion.num}
                                            type="radio"
                                            className="focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-400"
                                            onChange={this.handleChange}
                                            value={option.text}
                                        />
                                    </div>
                                ))}
                            </div>
                        </fieldset>
                    </div>

                ))}

            </div>
        );
    }
}
