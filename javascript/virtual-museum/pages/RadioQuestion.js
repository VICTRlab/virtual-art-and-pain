import { Component } from "react";

export default class RadioQuestion extends Component {
    constructor(props) {
        super(props);
        this.handleChange = this.handleChange.bind(this);
        this.state = { answer: '' };
    }
    handleChange(e) {
        this.props.onAnswerChange(e.target.value);
    }
    render() {
        const options = this.props.options;
        return (
            <div>
                <fieldset>
                    <div>
                        <legend className="block text-md font-medium text-gray-700">
                            {this.props.question}
                        </legend>
                    </div>

                    <div className="mt-4 space-y-4">
                        {options.map((option) => (
                            <div className="flex items-center">
                                <input
                                    id={option.text}
                                    name={this.props.name}
                                    type="radio"
                                    className="focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300"
                                    onChange={this.handleChange}
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
                                    />}
                            </div>
                        ))}
                    </div>

                </fieldset>
            </div>
        );
    }
}
