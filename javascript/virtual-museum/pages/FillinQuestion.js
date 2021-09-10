import { Component } from "react";

export default class FillinQuestion extends Component {
    constructor(props) {
        super(props);
        this.handleChange = this.handleChange.bind(this);
        this.state = { answer: '' };
    }
    handleChange(e) {
        this.props.onAnswerChange(e.target.value);
    }
    render() {
        return (<div className="grid grid-cols-3 gap-6" >
            <div className="col-span-3 sm:col-span-2">
                <label htmlFor="q1_1" className="block text-md font-medium text-gray-700">
                    {this.props.question}
                </label>
                <div className="mt-1 ">
                    <input
                        type="text"
                        name={this.props.name}
                        id="id-num"
                        className="focus:ring-indigo-500 focus:border-indigo-500 flex-1 block w-full rounded-md sm:text-sm border-gray-300"
                        placeholder={this.props.placeholder}
                        value={this.props.answer}
                        onChange={this.handleChange}
                    />
                </div>
            </div>
        </div>);
    }
}
