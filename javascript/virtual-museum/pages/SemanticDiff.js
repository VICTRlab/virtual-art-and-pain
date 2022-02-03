import { Component } from "react";

export default class SemanticDiff extends Component {    
    constructor(props) {
        super(props);
        this.answers = this.props.answers
        this.handleChange = this.handleChange.bind(this);
        this.handleChangeFTB = this.handleChangeFTB.bind(this);
        this.state = { answer: '' };
    }
    handleChange(e) {
        this.answers.set(e.target.name,e.target.value);
        this.props.onAnswerChange(this.answers);
    }
    handleChangeFTB(e) {
        this.props.onAnswerChangeFTB(e.target.value);
    }
    render() {
        
        const options = this.props.options;
        const bounds = this.props.bounds;
        return (
            <div className="border border-purple-300 rounded-md p-2">
                <legend className="my-2 block text-md font-medium text-gray-700">
                    {this.props.question}
                </legend>
                <p className="my-5 text-md text-gray-600">{this.props.moreText}</p>
              

                {this.props.bounds && bounds.map((bound) => (
                    <div key={bound.left}>
                        <fieldset>
                            <div className="border-t grid grid-cols-11 gap-1 bg-gray-20 w-full ">
                                <div className="col-span-2">
                                    <legend className="my-2 block text-md font-medium text-gray-700">
                                        {bound.left}
                                    </legend>

                                </div>
                                {this.props.options && options.map((option) => (
                                    <div className="border-r inline-block text-center" key={option.num}>
                                        <input
                                            name={bound.num}
                                            type="radio"
                                            className="focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-400"
                                            onChange={this.handleChange}
                                            value={option.num}
                                        />
                                    </div>
                                ))}
                                <div className="col-span-2">
                                    <legend className="my-2 block text-md font-medium text-gray-700">
                                        {bound.right}
                                    </legend>

                                </div>
                            </div>
                        </fieldset>
                    </div>

                ))}

            </div>
        );
    }
}
