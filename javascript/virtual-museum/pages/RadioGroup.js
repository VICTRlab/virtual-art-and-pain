import { Component } from "react";

export default class RadioGroup extends Component {
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
            <div>
                <fieldset>
                    <div>
                        <legend className="block text-md font-medium text-gray-700">
                            {this.props.question}
                        </legend>
                        <p className="my-2 text-sm text-gray-500">{this.props.moreText}</p>
                    </div>
                    <div className="grid grid-cols-2 gap-2">
                        <p className="block-inline">{this.props.leftBound}</p><p className="block-inline">{this.props.rightBound}</p>
                    </div>

                    <div className="mt-1 ">
                        {options.map((option) => (
                            <div className="inline-block text-center mx-1" key={option.text}>
                                <label htmlFor={option.text} className="mx-3 block text-sm font-medium text-gray-700">
                                    {option.text}
                                </label>
                                <input
                                    name={this.props.name}
                                    type="radio"
                                    className="focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300"
                                    onChange={this.handleChange}
                                    value={option.text}
                                />


                            </div>

                        ))}
                    </div>



                </fieldset>
            </div>
        );
    }
}
