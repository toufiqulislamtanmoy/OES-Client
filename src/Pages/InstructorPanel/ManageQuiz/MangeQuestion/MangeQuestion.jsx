
import { useForm } from "react-hook-form";
import useSingleQuiz from "../../../../Hooks/useSingleQuiz";
import { useParams } from "react-router-dom";
import useAxiosSecure from "../../../../Hooks/useAxiosSecure";

const MangeQuestion = () => {
    const { quizID } = useParams();
    const [axiosSecure] = useAxiosSecure();
    const { singleItem, refetch } = useSingleQuiz(quizID)
    const { register, handleSubmit, reset } = useForm();
    const { questions } = singleItem;
    console.log(singleItem);

    const onSubmit = async (data) => {

        console.log("New Question:", data);

        // Send only the new question data to the server
        const response = await axiosSecure.patch(`/addQuestions/${quizID}`, data);
        console.log("Response: ", response);
        if (response.data.modifiedCount > 0) {
            reset();
            refetch();
        }
    };

    const handleDeleteQuestion = async (index) => {
        try {
            const updatedQuestions = [...questions];
            const deletedQuestion = updatedQuestions.splice(index, 1)[0];

            // Make a delete request to the server using the question's properties
            const response = await axiosSecure.patch(`/deleteQuestion/${quizID}`, {
                deletedQuestion,
            });

            console.log("Delete response:", response);

            // Assuming you want to refetch the questions after deletion
            refetch();
        } catch (error) {
            console.error("Error deleting question:", error);
        }
    };



    return (
        <div className="mx-5 my-10">
            <h2 className="text-2xl font-bold mb-4">Question List</h2>

            {questions?.length > 0 ?
                questions.map((question, index) => (
                    <div key={index} className="mb-6 p-4 border rounded-md shadow-md">
                        <div className="mb-4">
                            <strong>Question:</strong> {question.questionText}
                        </div>
                        <div>
                            <strong>Options:</strong>
                            <ul className="list-disc ml-6">
                                {question?.options?.map((option, index) => (
                                    <li key={index}>{option}</li>
                                ))}
                            </ul>
                        </div>
                        <div className="mt-4">
                            <strong>Correct Answer:</strong> {question.correctAnswer}
                        </div>
                        <button
                            className="mt-4 bg-red-500 text-white py-2 px-4 rounded-full focus:outline-none focus:shadow-outline"
                            onClick={() => handleDeleteQuestion(question.index)}
                        >
                            Delete
                        </button>
                    </div>
                ))
                :
                <p>No More Question Added Yet</p>
            }

            {/* Add New Question Form */}
            <div className="mt-8">
                <h2 className="text-2xl font-bold mb-4">Add New Question</h2>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <div className="mb-4">
                        <label className="block text-sm font-bold mb-2" htmlFor="questionText">
                            Question:
                        </label>
                        <textarea
                            id="questionText"
                            name="questionText"
                            rows="3"
                            className="w-full border rounded-md p-2"
                            {...register("questionText", { required: true })}
                        ></textarea>
                    </div>
                    <div className="mb-4">
                        <label className="block text-sm font-bold mb-2">Options:</label>
                        {[0, 1, 2, 3]?.map((index) => (
                            <input
                                key={index}
                                type="text"
                                name={`options[${index}]`}
                                {...register(`options[${index}]`, { required: true })}
                                className="w-full border rounded-md p-2 mb-2"
                                placeholder={`Option ${index + 1}`}
                            />
                        ))}
                    </div>
                    <div className="mb-4">
                        <label className="block text-sm font-bold mb-2" htmlFor="correctAnswer">
                            Correct Answer:
                        </label>
                        <input
                            type="text"
                            id="correctAnswer"
                            name="correctAnswer"
                            className="w-full border rounded-md p-2"
                            {...register("correctAnswer", { required: true })}
                        />
                    </div>
                    <button
                        type="submit"
                        className="bg-blue-500 text-white py-2 px-4 rounded-full focus:outline-none focus:shadow-outline"
                    >
                        Add Question
                    </button>
                </form>
            </div>
        </div>
    );
};

export default MangeQuestion;