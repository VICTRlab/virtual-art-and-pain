import BaselineForm from "./BaselineForm";
export default function App() {
    return (
        <div className='bg-gray-50 md:w-full py-5'>
            <div className='container mx-auto mb-5'>
                <h1 className='text-center text-xl font-medium leading-6 text-gray-900'>Virtual Museum</h1>
            </div>

            <div className='md:w-1/2 mx-auto'>
                <BaselineForm />
            </div>
        </div>
    );
}

