import { useEffect, useState } from "react";
import { Controller, useForm } from "react-hook-form";
import { useParams } from "react-router-dom";

const QuizDetails = () => {
    const { id } = useParams();

    const [time, setTime] = useState(120);

    useEffect(() => {
        const countdownInterval = setInterval(() => {
            // Decrease time by 1 second
            setTime((prevTime) => (prevTime > 0 ? prevTime - 1 : 0));
        }, 1000);

        // Cleanup interval on component unmount
        return () => clearInterval(countdownInterval);
    }, []); //

    // Convert seconds to minutes and seconds
    const minutes = Math.floor(time / 60);
    const seconds = time % 60;

    const { control, handleSubmit } = useForm();

    const onSubmit = (data) => {
        console.log('Form Data:', data);
        // Extract values from data object
        const answerValues = Object.values(data);

        // Filter out undefined values (non-selected radio buttons)
        const selectedAnswers = answerValues.filter((value) => value !== undefined);

        // Push the selected answers into the 'answers' array
        const answers = [...selectedAnswers];

        console.log('Selected Answers:', answers);
    };

    return (
        <div className="mx-5 lg:mx-10">
            <h1 className="text-center my-10 font-Libre font-semibold">Basic C Programming</h1>
            <div className="lg:flex text-center lg:text-left items-center justify-between">
                <h1>Total Question: 15</h1>
                Time Remaining: {String(minutes).padStart(2, '0')}:{String(seconds).padStart(2, '0')}
                <h3>Total Time: 15 Minutes</h3>
            </div>

            {/* Question Part */}

            <form onSubmit={handleSubmit(onSubmit)}>
                <div className="grid grid-cols-1 lg:grid-cols-2 my-10 ">
                    {/* question1 */}
                    <div className="my-5">
                        <h3 className="text-xl font-bold mb-4">
                            1. What does the acronym "C" stand for in C programming language?
                        </h3>
                        <div className="grid grid-cols-2 gap-4">
                            {/* Options for Question 1 */}
                            <label className="flex items-center space-x-2">
                                <Controller
                                    control={control}
                                    name="radio5"
                                    render={({ field }) => (
                                        <input
                                            {...field}
                                            type="radio"
                                            className="radio radio-success"
                                            value="Computer"
                                            required
                                        />
                                    )}
                                />
                                <span>Computer</span>
                            </label>
                            <label className="flex items-center space-x-2">
                                <Controller
                                    control={control}
                                    name="radio5"
                                    render={({ field }) => (
                                        <input
                                            {...field}
                                            type="radio"
                                            className="radio radio-success"
                                            value="Code"
                                            required
                                        />
                                    )}
                                />
                                <span>Code</span>
                            </label>
                            <label className="flex items-center space-x-2">
                                <Controller
                                    control={control}
                                    name="radio5"
                                    render={({ field }) => (
                                        <input
                                            {...field}
                                            type="radio"
                                            className="radio radio-success"
                                            value="Center"
                                            required
                                        />
                                    )}
                                />
                                <span>Center</span>
                            </label>
                            <label className="flex items-center space-x-2">
                                <Controller
                                    control={control}
                                    name="radio5"
                                    render={({ field }) => (
                                        <input
                                            {...field}
                                            type="radio"
                                            className="radio radio-success"
                                            value="None"
                                            required
                                        />
                                    )}
                                />
                                <span>None</span>
                            </label>

                        </div>
                    </div>
                    {/* Question 2 */}
                    <div className="my-5">
                        <h3 className="text-xl font-bold mb-4">
                            1. What is the correct syntax for declaring an integer variable in C?
                        </h3>
                        <div className="grid grid-cols-2 gap-4">
                            {/* Options for Question 1 */}
                            <label className="flex items-center space-x-2">
                                <Controller
                                    control={control}
                                    name="radio6"
                                    render={({ field }) => (
                                        <input
                                            {...field}
                                            type="radio"
                                            className="radio radio-success"
                                            value="int x;"
                                            required
                                        />
                                    )}
                                />
                                <span>int x;</span>
                            </label>
                            <label className="flex items-center space-x-2">
                                <Controller
                                    control={control}
                                    name="radio6"
                                    render={({ field }) => (
                                        <input
                                            {...field}
                                            type="radio"
                                            className="radio radio-success"
                                            value="x = int;"
                                            required
                                        />
                                    )}
                                />
                                <span>x = int;</span>
                            </label>
                            <label className="flex items-center space-x-2">
                                <Controller
                                    control={control}
                                    name="radio6"
                                    render={({ field }) => (
                                        <input
                                            {...field}
                                            type="radio"
                                            className="radio radio-success"
                                            value="declare x as integer;"
                                            required
                                        />
                                    )}
                                />
                                <span>declare x as integer;</span>
                            </label>
                            <label className="flex items-center space-x-2">
                                <Controller
                                    control={control}
                                    name="radio6"
                                    render={({ field }) => (
                                        <input
                                            {...field}
                                            type="radio"
                                            className="radio radio-success"
                                            value="x = integer;"
                                            required
                                        />
                                    )}
                                />
                                <span>x = integer;</span>
                            </label>
                        </div>
                    </div>



                </div>

                <button className="btn bg-gradient-to-r from-primary to-[#a965c8] hover:from-purple-700 hover:to-indigo-700 text-white font-bold py-2 px-4  focus:outline-none focus:shadow-outline transition-all  duration-300 delay-100 rounded-full ">Submit</button>
            </form>
        </div>
    );
};


export default QuizDetails;