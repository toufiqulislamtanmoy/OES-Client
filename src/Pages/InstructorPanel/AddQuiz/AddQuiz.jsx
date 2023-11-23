import { faCheck } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useContext } from "react";
import { useForm } from "react-hook-form";
import { AuthContext } from "../../../Provider/AuthProviders";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";

const AddQuiz = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const {user} = useContext(AuthContext);
    const [axiosSecure] = useAxiosSecure();

    const onSubmit = data => {
        const quizData = {
            ...data,
            assignerEmail:user?.email,
            assignedName: user?.displayName,
            avatar: user?.photoURL,
            questions:[],
            status:false
         };
        console.log(quizData)

        const response = axiosSecure.post("/addQuiz",quizData);
        console.log(response.data);
    }
    return (
        <div className="bg-gray-100 min-h-screen flex items-center justify-center">

            <form onSubmit={handleSubmit(onSubmit)} className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 w-96 animate__animated animate__fadeInUp">
                <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2">
                        Quiz Title
                    </label>
                    <input
                        type="text"
                        placeholder="Enter Quiz Title Here"
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        {...register('quizTitle', { required: true })}
                    />
                    {errors.quizTitle && <span className="text-xs text-red-500">Did Not Add Quiz Title</span>}
                </div>

                <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2">
                        Total Time
                    </label>
                    <input
                        type="text"
                        placeholder="Enter Total Time Here"
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        {...register('totalTime', { required: true })}
                    />
                    {errors.totalTime && <span className="text-xs text-red-500">Did Not Add Total Time</span>}
                </div>

        

                <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2">
                        Designation
                    </label>
                    <input
                        type="text"
                        placeholder="Enter Designation Here"
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        {...register('designation', { required: true })}
                    />
                    {errors.designation && <span className="text-xs text-red-500">Did Not Add Designation</span>}
                </div>

                <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2">
                        Quiz Category
                    </label>
                    <select
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        {...register('quizCategory', { required: true })}
                    >
                        <option value="" disabled selected>Select Quiz Category</option>
                        <option value="CSE">CSE</option>
                        <option value="EEE">EEE</option>
                        <option value="BBA">BBA</option>
                    </select>
                    {errors.quizCategory && <span className="text-xs text-red-500">Please Select Quiz Type</span>}
                </div>

                <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2">
                        Difficulty Level
                    </label>
                    <select
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        {...register('difficultyLevel', { required: true })}
                    >
                        <option value="" disabled selected>Select Difficulty Level</option>
                        <option value="easy">Easy</option>
                        <option value="medium">Medium</option>
                        <option value="hard">Hard</option>
                    </select>
                    {errors.difficultyLevel && <span className="text-xs text-red-500">Please Select Difficulty Level</span>}
                </div>

                <div className="text-end">
                    <button className="bg-green-500 text-white py-2 px-4 border-none m-0 rounded-full focus:outline-none focus:shadow-outline animate__animated animate__pulse">
                        <FontAwesomeIcon icon={faCheck} className="mr-2" />
                        
                    </button>
                </div>
            </form>
        </div>

    );
};

export default AddQuiz;