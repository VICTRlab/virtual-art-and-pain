import SubmitSurveyButton from "./SubmitSurveyButon"
export default function BaselineForm() {
    return (
        <>
            <div>
                <div className="md:grid md:grid-cols-2 md:gap-6">

                    <div className="mt-5 md:mt-0 md:col-span-2">
                        <form action="#" method="POST">
                            <div className="shadow sm:rounded-md sm:overflow-hidden">

                                <div className="px-4 py-5 bg-white space-y-6 sm:p-6">
                                    <h1 className="block text-lg font-medium text-gray-700">Survey #1</h1>
                                    <div className="hidden sm:block" aria-hidden="true">
                                        <div className="py-2">
                                            <div className="border-t border-gray-300" />
                                        </div>
                                    </div>
                                    <div className="grid grid-cols-3 gap-6">
                                        <div className="col-span-3 sm:col-span-2">
                                            <label htmlFor="id-num" className="block text-md font-medium text-gray-700">
                                                Q1.1 Participant ID # (NOTE FROM JOSH: Is this being kept in?)
                                            </label>
                                            <div className="mt-1 ">

                                                <input
                                                    type="text"
                                                    name="id-num"
                                                    id="id-num"
                                                    className="focus:ring-indigo-500 focus:border-indigo-500 flex-1 block w-full rounded-md sm:text-sm border-gray-300"
                                                    placeholder="ID Number"
                                                />
                                            </div>
                                        </div>
                                    </div>
                                    <div>
                                        <fieldset>
                                            <div>
                                                <legend className="block text-md font-medium text-gray-700">Q1.2 To which gender do you most identify?</legend>
                                            </div>
                                            <div className="mt-4 space-y-4">
                                                <div className="flex items-center">
                                                    <input
                                                        id="f"
                                                        name="gender"
                                                        type="radio"
                                                        className="focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300"
                                                    />
                                                    <label htmlFor="f" className="ml-3 block text-sm font-medium text-gray-700">
                                                        Female
                                                    </label>
                                                </div>
                                                <div className="flex items-center">
                                                    <input
                                                        id="m"
                                                        name="gender"
                                                        type="radio"
                                                        className="focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300"
                                                    />
                                                    <label htmlFor="m" className="ml-3 block text-sm font-medium text-gray-700">
                                                        Male
                                                    </label>
                                                </div>
                                                <div className="flex items-center">
                                                    <input
                                                        id="nb"
                                                        name="gender"
                                                        type="radio"
                                                        className="focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300"
                                                    />
                                                    <label htmlFor="nb" className="ml-3 block text-sm font-medium text-gray-700">
                                                        Non-binary/third gender
                                                    </label>
                                                </div>
                                                <div className="flex items-center">
                                                    <input
                                                        id="sd"
                                                        name="gender"
                                                        type="radio"
                                                        className="focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300"
                                                    />
                                                    <label htmlFor="sd" className="ml-3 block text-sm font-medium text-gray-700">
                                                        Prefer to self describe:
                                                    </label>
                                                    <input
                                                        type="text"
                                                        name="self-d"
                                                        id="self-d"
                                                        className="mx-2 focus:ring-indigo-500 focus:border-indigo-500 flex-1 block w-full rounded-md sm:text-sm border-gray-300"
                                                        placeholder=" "
                                                    />
                                                </div>
                                                <div className="flex items-center">
                                                    <input
                                                        id="pref-not"
                                                        name="gender"
                                                        type="radio"
                                                        className="focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300"
                                                    />
                                                    <label htmlFor="push-nothing" className="ml-3 block text-sm font-medium text-gray-700">
                                                        Prefer not to answer
                                                    </label>
                                                </div>
                                            </div>
                                        </fieldset>
                                    </div>

                                    <div className="grid grid-cols-3 gap-6">
                                        <div className="col-span-3 sm:col-span-2">
                                            <label htmlFor="age" className="block text-md font-medium text-gray-700">
                                                Q1.3 What is your age?
                                            </label>
                                            <p className="text-sm text-gray-500">Enter your age as a number of years</p>

                                            <div className="mt-1 ">

                                                <input
                                                    type="text"
                                                    name="age"
                                                    id="age"
                                                    className="focus:ring-indigo-500 focus:border-indigo-500 flex-1 block w-full rounded-md sm:text-sm border-gray-300"
                                                    placeholder="Age"
                                                />
                                            </div>
                                        </div>
                                    </div>

                                    <div>
                                        <fieldset>
                                            <div>
                                                <legend className="block text-md font-medium text-gray-700">Q1.4 Do you consider yourself to be Hispanic of Latinx?</legend>
                                                <p className="text-sm text-gray-500">Check one box</p>
                                            </div>
                                            <div className="mt-4 space-y-4">
                                                <div className="flex items-center">
                                                    <input
                                                        id="f"
                                                        name="gender"
                                                        type="radio"
                                                        className="focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300"
                                                    />
                                                    <label htmlFor="f" className="ml-3 block text-sm font-medium text-gray-700">
                                                        No
                                                    </label>
                                                </div>
                                                <div className="flex items-center">
                                                    <input
                                                        id="m"
                                                        name="gender"
                                                        type="radio"
                                                        className="focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300"
                                                    />
                                                    <label htmlFor="m" className="ml-3 block text-sm font-medium text-gray-700">
                                                        Yes
                                                    </label>
                                                </div>
                                                <div className="flex items-center">
                                                    <input
                                                        id="nb"
                                                        name="gender"
                                                        type="radio"
                                                        className="focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300"
                                                    />
                                                    <label htmlFor="nb" className="ml-3 block text-sm font-medium text-gray-700">
                                                        Unknown
                                                    </label>
                                                </div>
                                                <div className="flex items-center">
                                                    <input
                                                        id="sd"
                                                        name="gender"
                                                        type="radio"
                                                        className="focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300"
                                                    />
                                                    <label htmlFor="sd" className="ml-3 block text-sm font-medium text-gray-700">
                                                        Prefer not to answer
                                                    </label>

                                                </div>
                                            </div>
                                        </fieldset>
                                    </div>

                                    <div>
                                        <fieldset>
                                            <div>
                                                <legend className="block text-md font-medium text-gray-700">Q1.4 What race or races do you consider yourself to be?</legend>
                                                <p className="text-sm text-gray-500">Check all groups that apply to you</p>
                                            </div>
                                            <div className="mt-4 space-y-4">
                                                <div className="flex items-center">
                                                    <input
                                                        id="f"
                                                        name="gender"
                                                        type="checkbox"
                                                        className="focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300"
                                                    />
                                                    <label htmlFor="f" className="ml-3 block text-sm font-medium text-gray-700">
                                                        White
                                                    </label>
                                                </div>
                                                <div className="flex items-center">
                                                    <input
                                                        id="m"
                                                        name="gender"
                                                        type="checkbox"
                                                        className="focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300"
                                                    />
                                                    <label htmlFor="m" className="ml-3 block text-sm font-medium text-gray-700">
                                                        Black or African American
                                                    </label>
                                                </div>
                                                <div className="flex items-center">
                                                    <input
                                                        id="nb"
                                                        name="gender"
                                                        type="checkbox"
                                                        className="focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300"
                                                    />
                                                    <label htmlFor="nb" className="ml-3 block text-sm font-medium text-gray-700">
                                                        American Indian or Alaska Native
                                                    </label>
                                                </div>
                                                <div className="flex items-center">
                                                    <input
                                                        id="sd"
                                                        name="gender"
                                                        type="checkbox"
                                                        className="focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300"
                                                    />
                                                    <label htmlFor="sd" className="ml-3 block text-sm font-medium text-gray-700">
                                                        Asian
                                                    </label>
                                                </div>
                                                <div className="flex items-center">
                                                    <input
                                                        id="sd"
                                                        name="gender"
                                                        type="checkbox"
                                                        className="focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300"
                                                    />
                                                    <label htmlFor="sd" className="ml-3 block text-sm font-medium text-gray-700">
                                                        Native Hawaiian or Pacific Islander
                                                    </label>
                                                </div>
                                                <div className="flex items-center">
                                                    <input
                                                        id="sd"
                                                        name="gender"
                                                        type="checkbox"
                                                        className="focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300"
                                                    />
                                                    <label htmlFor="sd" className="ml-3 block text-sm font-medium text-gray-700">
                                                        Unknown
                                                    </label>
                                                </div>
                                                <div className="flex items-center">
                                                    <input
                                                        id="sd"
                                                        name="gender"
                                                        type="checkbox"
                                                        className="focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300"
                                                    />
                                                    <label htmlFor="sd" className="ml-3 block text-sm font-medium text-gray-700">
                                                        Prefer not to answer
                                                    </label>
                                                </div>
                                            </div>
                                        </fieldset>
                                    </div>

                                    <div>
                                        <fieldset>
                                            <div>
                                                <legend className="block text-md font-medium text-gray-700">Q1.6 Education level (Select the highest level attained)</legend>
                                            </div>
                                            <div className="mt-4 space-y-4">
                                                <div className="flex items-center">
                                                    <input
                                                        id="f"
                                                        name="gender"
                                                        type="radio"
                                                        className="focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300"
                                                    />
                                                    <label htmlFor="f" className="ml-3 block text-sm font-medium text-gray-700">
                                                        No high school diploma
                                                    </label>
                                                </div>
                                                <div className="flex items-center">
                                                    <input
                                                        id="m"
                                                        name="gender"
                                                        type="radio"
                                                        className="focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300"
                                                    />
                                                    <label htmlFor="m" className="ml-3 block text-sm font-medium text-gray-700">
                                                        High school graduate or GED
                                                    </label>
                                                </div>
                                                <div className="flex items-center">
                                                    <input
                                                        id="nb"
                                                        name="gender"
                                                        type="radio"
                                                        className="focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300"
                                                    />
                                                    <label htmlFor="nb" className="ml-3 block text-sm font-medium text-gray-700">
                                                        Some college, no degree
                                                    </label>
                                                </div>
                                                <div className="flex items-center">
                                                    <input
                                                        id="sd"
                                                        name="gender"
                                                        type="radio"
                                                        className="focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300"
                                                    />
                                                    <label htmlFor="sd" className="ml-3 block text-sm font-medium text-gray-700">
                                                        Occupational/technical/vocational program
                                                    </label>
                                                </div>
                                                <div className="flex items-center">
                                                    <input
                                                        id="sd"
                                                        name="gender"
                                                        type="radio"
                                                        className="focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300"
                                                    />
                                                    <label htmlFor="sd" className="ml-3 block text-sm font-medium text-gray-700">
                                                        Bachelor's degree
                                                    </label>
                                                </div>
                                                <div className="flex items-center">
                                                    <input
                                                        id="sd"
                                                        name="gender"
                                                        type="radio"
                                                        className="focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300"
                                                    />
                                                    <label htmlFor="sd" className="ml-3 block text-sm font-medium text-gray-700">
                                                        Master's degree (e.g. M.A., M.S., M.B.A)
                                                    </label>
                                                </div>
                                                <div className="flex items-center">
                                                    <input
                                                        id="sd"
                                                        name="gender"
                                                        type="radio"
                                                        className="focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300"
                                                    />
                                                    <label htmlFor="sd" className="ml-3 block text-sm font-medium text-gray-700">
                                                        Professional school degree (e.g. M.D., D.D.S., D.V.M., J.D.)
                                                    </label>
                                                </div>
                                            </div>
                                        </fieldset>
                                    </div>

                                    <div>
                                        <fieldset>
                                            <div>
                                                <legend className="block text-md font-medium text-gray-700">Q1.7 Employment Status</legend>
                                            </div>
                                            <div className="mt-4 space-y-4">
                                                <div className="flex items-center">
                                                    <input
                                                        id="f"
                                                        name="gender"
                                                        type="radio"
                                                        className="focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300"
                                                    />
                                                    <label htmlFor="f" className="ml-3 block text-sm font-medium text-gray-700">
                                                        Working now
                                                    </label>
                                                </div>
                                                <div className="flex items-center">
                                                    <input
                                                        id="m"
                                                        name="gender"
                                                        type="radio"
                                                        className="focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300"
                                                    />
                                                    <label htmlFor="m" className="ml-3 block text-sm font-medium text-gray-700">
                                                        Looking for work, unemployed
                                                    </label>
                                                </div>
                                                <div className="flex items-center">
                                                    <input
                                                        id="nb"
                                                        name="gender"
                                                        type="radio"
                                                        className="focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300"
                                                    />
                                                    <label htmlFor="nb" className="ml-3 block text-sm font-medium text-gray-700">
                                                        Sick leave or maternity leave
                                                    </label>
                                                </div>
                                                <div className="flex items-center">
                                                    <input
                                                        id="sd"
                                                        name="gender"
                                                        type="radio"
                                                        className="focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300"
                                                    />
                                                    <label htmlFor="sd" className="ml-3 block text-sm font-medium text-gray-700">
                                                        Disabled due to pain, permanently or temporarily
                                                    </label>
                                                </div>
                                                <div className="flex items-center">
                                                    <input
                                                        id="sd"
                                                        name="gender"
                                                        type="radio"
                                                        className="focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300"
                                                    />
                                                    <label htmlFor="sd" className="ml-3 block text-sm font-medium text-gray-700">
                                                        Disabled for reasons other than back pain
                                                    </label>
                                                </div>
                                                <div className="flex items-center">
                                                    <input
                                                        id="sd"
                                                        name="gender"
                                                        type="radio"
                                                        className="focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300"
                                                    />
                                                    <label htmlFor="sd" className="ml-3 block text-sm font-medium text-gray-700">
                                                        Student                                                    </label>
                                                </div>
                                                <div className="flex items-center">
                                                    <input
                                                        id="sd"
                                                        name="gender"
                                                        type="radio"
                                                        className="focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300"
                                                    />
                                                    <label htmlFor="sd" className="ml-3 block text-sm font-medium text-gray-700">
                                                        Temporarily laid off
                                                    </label>
                                                </div>
                                                <div className="flex items-center">
                                                    <input
                                                        id="sd"
                                                        name="gender"
                                                        type="radio"
                                                        className="focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300"
                                                    />
                                                    <label htmlFor="sd" className="ml-3 block text-sm font-medium text-gray-700">
                                                        Retired                                                    </label>
                                                </div>
                                                <div className="flex items-center">
                                                    <input
                                                        id="sd"
                                                        name="gender"
                                                        type="radio"
                                                        className="focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300"
                                                    />
                                                    <label htmlFor="sd" className="ml-3 block text-sm font-medium text-gray-700">
                                                        Keeping house
                                                    </label>
                                                </div>
                                                <div className="flex items-center">
                                                    <input
                                                        id="sd"
                                                        name="gender"
                                                        type="radio"
                                                        className="focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300"
                                                    />
                                                    <label htmlFor="sd" className="ml-3 block text-sm font-medium text-gray-700">
                                                        Other, specify:
                                                    </label>
                                                    <input
                                                        type="text"
                                                        name="self-d"
                                                        id="self-d"
                                                        className="mx-2 focus:ring-indigo-500 focus:border-indigo-500 flex-1 block w-full rounded-md sm:text-sm border-gray-300"
                                                        placeholder=" "
                                                    />

                                                </div>
                                                <div className="flex items-center">
                                                    <input
                                                        id="sd"
                                                        name="gender"
                                                        type="radio"
                                                        className="focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300"
                                                    />
                                                    <label htmlFor="sd" className="ml-3 block text-sm font-medium text-gray-700">
                                                        Unknown                                                    </label>
                                                </div>
                                            </div>
                                        </fieldset>
                                    </div>

                                    <div>
                                        <fieldset>
                                            <div>
                                                <legend className="block text-md font-medium text-gray-700">Q1.8 In general, would you say your health is ... ? (check one box)</legend>
                                            </div>
                                            <div className="mt-4 space-y-4">
                                                <div className="flex items-center">
                                                    <input
                                                        id="f"
                                                        name="gender"
                                                        type="radio"
                                                        className="focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300"
                                                    />
                                                    <label htmlFor="f" className="ml-3 block text-sm font-medium text-gray-700">
                                                        Excellent                                                    </label>
                                                </div>
                                                <div className="flex items-center">
                                                    <input
                                                        id="m"
                                                        name="gender"
                                                        type="radio"
                                                        className="focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300"
                                                    />
                                                    <label htmlFor="m" className="ml-3 block text-sm font-medium text-gray-700">
                                                        Very Good                                                    </label>
                                                </div>
                                                <div className="flex items-center">
                                                    <input
                                                        id="nb"
                                                        name="gender"
                                                        type="radio"
                                                        className="focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300"
                                                    />
                                                    <label htmlFor="nb" className="ml-3 block text-sm font-medium text-gray-700">
                                                        Good                                                    </label>
                                                </div>
                                                <div className="flex items-center">
                                                    <input
                                                        id="sd"
                                                        name="gender"
                                                        type="radio"
                                                        className="focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300"
                                                    />
                                                    <label htmlFor="sd" className="ml-3 block text-sm font-medium text-gray-700">
                                                        Fair                                                    </label>
                                                </div>
                                                <div className="flex items-center">
                                                    <input
                                                        id="sd"
                                                        name="gender"
                                                        type="radio"
                                                        className="focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300"
                                                    />
                                                    <label htmlFor="sd" className="ml-3 block text-sm font-medium text-gray-700">
                                                        Poor
                                                    </label>
                                                </div>

                                            </div>
                                        </fieldset>
                                    </div>

                                    <div>
                                        <fieldset>
                                            <div>
                                                <legend className="block text-md font-medium text-gray-700">Q1.10 How often did you visit an art museum last year?</legend>
                                            </div>
                                            <div className="mt-4 space-y-4">
                                                <div className="flex items-center">
                                                    <input
                                                        id="n0"
                                                        name="museum-visits"
                                                        type="radio"
                                                        className="focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300"
                                                    />
                                                    <label htmlFor="f" className="ml-3 block text-sm font-medium text-gray-700">
                                                        None                                                  </label>
                                                </div>
                                                <div className="flex items-center">
                                                    <input
                                                        id="n1"
                                                        name="museum-visits"
                                                        type="radio"
                                                        className="focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300"
                                                    />
                                                    <label htmlFor="m" className="ml-3 block text-sm font-medium text-gray-700">
                                                        1 time</label>
                                                </div>
                                                <div className="flex items-center">
                                                    <input
                                                        id="n2"
                                                        name="museum-visits"
                                                        type="radio"
                                                        className="focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300"
                                                    />
                                                    <label htmlFor="nb" className="ml-3 block text-sm font-medium text-gray-700">
                                                        2 times           </label>
                                                </div>
                                                <div className="flex items-center">
                                                    <input
                                                        id="n3"
                                                        name="museum-visits"
                                                        type="radio"
                                                        className="focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300"
                                                    />
                                                    <label htmlFor="sd" className="ml-3 block text-sm font-medium text-gray-700">
                                                        3 times       </label>
                                                </div>
                                                <div className="flex items-center">
                                                    <input
                                                        id="n3p"
                                                        name="museum-visits"
                                                        type="radio"
                                                        className="focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300"
                                                    />
                                                    <label htmlFor="sd" className="ml-3 block text-sm font-medium text-gray-700">
                                                        More than 3 times
                                                    </label>
                                                </div>
                                                <div className="hidden sm:block" aria-hidden="true">
                                                    <div className="py-5">
                                                        <div className="border-t border-gray-200" />
                                                    </div>
                                                </div>
                                            </div>
                                        </fieldset>
                                    </div>
                                    <div>
                                        <fieldset>
                                            <div>
                                                <legend className="block text-md font-medium text-gray-700">Q2.3 Has your health care provider diagnosed your pain condition? (check one box)
                                                </legend>
                                            </div>
                                            <div className="mt-4 space-y-4">
                                                <div className="flex items-center">
                                                    <input
                                                        id="n"
                                                        name="health"
                                                        type="radio"
                                                        className="focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300"
                                                    />
                                                    <label htmlFor="f" className="ml-3 block text-sm font-medium text-gray-700">
                                                        No                                                    </label>
                                                </div>
                                                <div className="flex items-center">
                                                    <input
                                                        id="y"
                                                        name="health"
                                                        type="radio"
                                                        className="focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300"
                                                    />
                                                    <label htmlFor="m" className="ml-3 block text-sm font-medium text-gray-700">
                                                        Yes                                                    </label>
                                                </div>

                                            </div>
                                        </fieldset>
                                    </div>

                                    <p className='p-2 text-sm bg-red-500'>IF you answered “NO” THEN skip To Q3.1 – What is your pain intensity right now?</p>

                                    <div>
                                        <label htmlFor="diagnosis" className="block text-sm font-medium text-gray-700">
                                            Q2.4 If yes, what is the diagnosis or diagnoses for your pain condition or conditions? (write in your answer)
                                        </label>

                                        <div className="mt-1">
                                            <textarea
                                                id="diagnosis"
                                                name="diagnosis"
                                                rows={1}
                                                className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 mt-1 block w-full sm:text-sm border border-gray-300 rounded-md"
                                                placeholder=" "
                                                defaultValue={''}
                                            />
                                        </div>
                                    </div>
                                    <p className='p-2 text-sm bg-red-700'>TODO FOR JOSH: BASELINE QUESTIONS ARE INCOMPLETE </p>
                                </div>

                            </div>
                        </form>
                    </div>
                </div>
            </div>

            <div className="hidden sm:block" aria-hidden="true">
                <div className="py-5">
                    <div className="border-t border-gray-200" />
                </div>
            </div>


        </>
    )
}