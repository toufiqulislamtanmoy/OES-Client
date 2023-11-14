import { useEffect, useState } from "react";
import { Controller, useForm } from "react-hook-form";
import { useParams } from "react-router-dom";
import useSingleQuiz from "../../Hooks/useSingleQuiz";

const QuizDetails = () => {
    const { id } = useParams();
    const { singleItem, loading } = useSingleQuiz(id);

    const correctAnswers = singleItem?.questions?.map(question => question.correctAnswer);

    // console.log("Correct Answer Form Server: ",correctAnswers);



    // const navigate = useNavigate();

    const [time, setTime] = useState(singleItem.totalTime);


    const formatTime = (timeInSeconds) => {
        const minutes = Math.floor(timeInSeconds / 60);
        const seconds = timeInSeconds % 60;
        return `${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;
    };

    useEffect(() => {

        const initialTimeout = setTimeout(() => {
            setTime(singleItem?.totalTime * 60 || 0);
        }, 1000);


        const countdownInterval = setInterval(() => {
            setTime((prevTime) => (prevTime > 0 ? prevTime - 1 : 0));
        }, 1000);


        return () => {
            clearTimeout(initialTimeout);
            clearInterval(countdownInterval);
        };
    }, [singleItem]);

    const { control, handleSubmit } = useForm();

    const onSubmit = (data) => {
        console.log(data);

        const answerValues = Object.values(data);






        console.log('Selected Answers:', answerValues);


        const correctCount = correctAnswers.reduce((count, correctAnswer, index) => {
            if (answerValues[index] === correctAnswer) {
                return count + 1;
            }
            return count;
        }, 0);

        console.log('Correct Answers Count:', correctCount);

    };

    return (

        <div className="mx-5 lg:mx-10">
            <h1 className="text-center my-10 font-Libre font-semibold">{singleItem.quizTitle}</h1>
            <div className="lg:flex text-center lg:text-left items-center justify-between">
                <h1>Total Question: {singleItem?.questions?.length}</h1>
                Time Remaining: {isNaN(time) ? 'NaN' : formatTime(time)}
                <h3>Total Time: {singleItem.totalTime} Minutes</h3>
            </div>

            {/* Question Part */}

            <form onSubmit={handleSubmit(onSubmit)}>
                <div className="grid grid-cols-1 lg:grid-cols-2 my-10">
                    {singleItem && singleItem.questions ? (
                        singleItem.questions.map((question, ind) => (
                            <div key={ind} className="my-5">
                                <h3 className="text-xl font-bold mb-4">
                                    {ind + 1}. {question.questionText}
                                </h3>
                                <div className="grid grid-cols-2 gap-4">
                                    {question.options.map((option, optionIndex) => (
                                        <label key={optionIndex} className="flex items-center space-x-2">
                                            <Controller
                                                control={control}
                                                name={`question_${ind}`} // Use question index or ID as the field name
                                                render={({ field }) => (
                                                    <input
                                                        {...field}
                                                        type="radio"
                                                        className="radio radio-success"
                                                        value={option} // Use option value as the selected value
                                                        data-question={question.questionText} // Store question text as data attribute
                                                        required
                                                    />
                                                )}
                                            />
                                            <span>{option}</span>
                                        </label>
                                    ))}
                                </div>
                            </div>
                        ))
                    ) : (
                        <p>Loading...</p>
                    )}
                </div>

                <button className="btn bg-gradient-to-r from-primary to-[#a965c8] hover:from-purple-700 hover:to-indigo-700 text-white font-bold py-2 px-4 focus:outline-none focus:shadow-outline transition-all duration-300 delay-100 rounded-full ">
                    Submit
                </button>
            </form>


        </div>

    );
};


export default QuizDetails;