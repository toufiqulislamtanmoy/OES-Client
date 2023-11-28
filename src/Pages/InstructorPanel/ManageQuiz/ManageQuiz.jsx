import { Link } from "react-router-dom";
import useIndividualQuizDetails from "../../../Hooks/useIndividualQuizDetails";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheckCircle, faCirclePlus, faCircleXmark } from "@fortawesome/free-solid-svg-icons";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";
import { useState } from "react";

const ManageQuiz = () => {

    const { indquiz, refetch } = useIndividualQuizDetails();
    const [axiosSecure] = useAxiosSecure();
    const [loading, setLoading] = useState(false); // State to manage loading state during API calls

    const handleDeleteQuiz = async (quizId) => {
        try {
            setLoading(true);

            // Make a delete request to the server using the quiz ID
            const response = await axiosSecure.delete(`/deleteQuiz/${quizId}`);
            console.log("Delete Quiz response:", response);
            refetch();

        } catch (error) {
            console.error("Error deleting quiz:", error);
        } finally {
            setLoading(false);
        }
    };

    const handlePublishQuiz = async (quizId, currentStatus) => {
        try {
            setLoading(true);

            // Make a patch request to toggle the quiz status
            const response = await axiosSecure.patch(`/publishQuiz/${quizId}`, {
                currentStatus: currentStatus,
            });
            console.log("Toggle Quiz Status response:", response);

            refetch();
        } catch (error) {
            console.error("Error toggling quiz status:", error);
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="my-10 z-10">
            <div className="overflow-x-auto my-10">
                <table className="min-w-full divide-y divide-gray-200 border border-gray-300 shadow-lg rounded-md overflow-hidden">
                    {/* Head */}
                    <thead className="bg-gray-50">
                        <tr>
                            <th className="py-2 px-4 text-left font-bold">Quiz Details</th>
                            <th className="py-2 px-4 text-left font-bold">Assigner Email</th>
                            <th className="py-2 px-4 text-left font-bold">Add Question</th>
                            <th className="py-2 px-4 text-left font-bold">Delete Quiz</th>
                            <th className="py-2 px-4 text-left font-bold">Publish Quiz</th>
                        </tr>
                    </thead>
                    <tbody className="bg-white divide-y divide-gray-200">
                        {/* Rows */}
                        {indquiz.map((singleQuiz) => (
                            <tr
                                key={singleQuiz._id}
                                className="hover:bg-gray-100"
                            >
                                <td className="py-4 px-4">
                                    <div>
                                        <span className="font-bold">{singleQuiz.quizTitle}</span>
                                        <br />
                                        <span className="text-sm text-gray-500">{singleQuiz.quizCategory}</span>
                                        <br />
                                        <span className="text-sm text-gray-500">{`Total Questions: ${singleQuiz?.questions?.length}`}</span>
                                        <br />
                                        <span className="text-sm text-gray-500">{`Total Time: ${singleQuiz.totalTime} Minutes`}</span>
                                        <br />
                                        <span className="text-sm text-gray-500">{`Difficulty Level: ${singleQuiz.difficultyLevel}`}</span>
                                    </div>
                                </td>
                                <td className="py-4 px-4">{singleQuiz.assignerEmail}</td>
                                <td className="py-4 px-4">
                                    {/* Add Question Button */}
                                    <Link to={`/dashboard/addquestions/${singleQuiz._id}`} className="">
                                        <FontAwesomeIcon icon={faCirclePlus} className="text-white text-xl inline-block rounded-full p-3 bg-gradient-to-r from-blue-500 to-yellow-500 hover:from-green-500 hover:to-blue-500 transform hover:scale-110 transition-transform duration-300" />
                                    </Link>

                                </td>
                                <td className="py-4 px-4">
                                    {/* Delete Quiz Button */}
                                    <button
                                        onClick={() => handleDeleteQuiz(singleQuiz._id)}
                                        disabled={loading} // Disable button during API call
                                    >
                                        <FontAwesomeIcon
                                            icon={faCircleXmark}
                                            className="text-white text-xl inline-block rounded-full p-3 bg-gradient-to-r from-red-500 to-orange-700 hover:from-orange-700 hover:to-red-500 transform hover:scale-110 transition-transform duration-300"
                                        />
                                    </button>
                                </td>
                                <td className="py-4 px-4">
                                    {/* Publish Quiz Button */}
                                    <button
                                        onClick={() => handlePublishQuiz(singleQuiz._id, singleQuiz?.status)}
                                        disabled={loading}
                                        className={`bg-${singleQuiz?.status ? 'red' : 'green'}-500 text-white py-2 px-4 rounded-full focus:outline-none focus:shadow-outline hover:bg-${singleQuiz?.status ? 'red' : 'green'}-600 transition-colors duration-300`}
                                    >
                                        {singleQuiz?.status ? 'Unpublish' : 'Publish'}
                                    </button>

                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>

    );
};

export default ManageQuiz;