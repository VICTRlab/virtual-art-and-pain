import {Component} from 'react';

export default class Welcome extends Component {
    constructor(props) {
        super(props);
        this.state = {         
        };

        this.handleSubmit = this.handleSubmit.bind(this);
    }
    handleSubmit(event) {
        //this.writeData(TEMP_ID);
        event.preventDefault();
        if(confirm('Are you sure you want to submit? ') == true) {
            this.props.submitSurvey();
        }
        
    }
    render() {
        return (
            <div className="my-5 md:col-span-3 md:w-2/3 mx-auto">
                <div>
                    <div className="md:grid md:grid-cols-2 md:gap-6">

                        <div className="mt-5 md:mt-0 md:col-span-2">
                            <div>{this.props.id}</div>
                            <form
                                onKeyPress={(e) => { e.key === 'Enter' && e.preventDefault(); }}
                                onSubmit={this.handleSubmit}
                                action="#"
                                method="POST">
                                <div className="shadow md:rounded-md sm:overflow-hidden">

                                    <div className="px-4 py-5 bg-white space-y-6 sm:p-6">
                                        <h1 className="block text-lg font-medium text-gray-700">Welcome</h1>
                                        <div className="hidden sm:block" aria-hidden="true">
                                            <div className="py-2">
                                                <div className="border-t border-gray-300" />
                                            </div>
                                        </div>

                                        
                                    </div>

                                </div>

                                <input type="submit" value="Start" className='my-2 inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500' />
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