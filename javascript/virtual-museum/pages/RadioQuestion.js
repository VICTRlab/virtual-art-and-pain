import { Component } from "react";

export default class RadioQuestion extends Component {
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
        return (
            <div className="border border-purple-300 rounded-md p-2">
                <fieldset>
                    <div>
                        <legend className="block text-md font-medium text-gray-700">
                            {this.props.question}
                        </legend>
                    </div>

                    <div className="mt-4 space-y-4">
                        <fieldset>
                            {this.props.options && options.map((option) => (
                                <div className="flex items-center" key={option.text}>
                                    <input

                                        name={this.props.name}
                                        type="radio"
                                        className="focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300"
                                        onChange={this.handleChange}
                                        value={option.text}
                                    />
                                    <label htmlFor={option.text} className="ml-3 block text-sm font-medium text-gray-700">
                                        {option.text}
                                    </label>
                                    {option.fillIn !== null && option.fillIn == true &&
                                        <input
                                            type="text"
                                            name={this.props.name}
                                            id="self-d"
                                            className="mx-2 focus:ring-indigo-500 focus:border-indigo-500 flex-1 block w-full rounded-md sm:text-sm border-gray-300"
                                            placeholder=" "
                                            value={this.props.answer}
                                            onChange={this.handleChangeFTB}
                                        />}
                                </div>
                            ))}
                        </fieldset>
                    </div>

                </fieldset>

            </div>
        );
    }
}
