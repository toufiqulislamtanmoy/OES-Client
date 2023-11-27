import { Link } from "react-router-dom";
import useIndividualQuizDetails from "../../../Hooks/useIndividualQuizDetails";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheckCircle, faCirclePlus, faCircleXmark } from "@fortawesome/free-solid-svg-icons";

const ManageQuiz = () => {

    const { indquiz } = useIndividualQuizDetails();
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
                                    <Link to="/dashboard/deletequiz" className="">
                                        <FontAwesomeIcon icon={faCircleXmark} className="text-white text-xl inline-block rounded-full p-3 bg-gradient-to-r from-red-500 to-orange-700 hover:from-orange-700 hover:to-red-500 transform hover:scale-110 transition-transform duration-300" />
                                    </Link>
                                </td>
                                <td className="py-4 px-4">
                                    {/* Publish Quiz Button */}
                                    <Link to="/publishquiz" className="">
                                        <FontAwesomeIcon icon={faCheckCircle} className="text-white text-xl inline-block rounded-full p-3 bg-gradient-to-r from-green-500 to-blue-500 hover:from-blue-500 hover:to-green-500 transform hover:scale-110 transition-transform duration-300" />
                                    </Link>
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