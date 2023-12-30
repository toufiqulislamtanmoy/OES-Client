import { Link } from "react-router-dom";
import useAllQuiz from "../../Hooks/useAllQuiz";


const Quiz = () => {
    const { quiz } = useAllQuiz();

    console.log(quiz);



    const handleCategory = (event) => {
        const sortCategory = event.target.value;
        console.log(sortCategory);

    };
    const handleDifficultyLevel = (event) => {
        const DifficultyLevel = event.target.value;
        console.log(DifficultyLevel);

    };


    const handleQuizDate = (event) => {
        const QuizDate = event.target.value;
        console.log(QuizDate);

    };

    return (
        <div className="my-10">
            <div className="flex items-center justify-center gap-3">
                <select className="select select-bordered select-xs" onChange={handleCategory}>
                    <option disabled selected>Category</option>
                    <option>Programming</option>
                    <option>Math</option>
                    <option>English</option>
                </select>
                <select className="select select-bordered select-xs" onChange={handleDifficultyLevel}>
                    <option disabled selected>Difficulty</option>
                    <option>Beginner</option>
                    <option>Intermediate</option>
                    <option>Professional</option>
                </select>
                <select className="select select-bordered select-xs" onChange={handleQuizDate}>
                    <option disabled selected>Newest</option>
                    <option>Newest</option>
                    <option>Oldest</option>

                </select>

            </div>

            <div className="overflow-x-auto my-10">
                <table className="min-w-full divide-y divide-gray-200 border border-gray-300 shadow-lg rounded-md overflow-hidden">
                    {/* Head */}
                    <thead className="bg-gray-50">
                        <tr>
                            <th className="py-2 px-4 text-left font-bold">Assigner Details</th>
                            <th className="py-2 px-4 text-left font-bold">Quiz Details</th>
                            <th className="py-2 px-4 text-left font-bold">Difficulty</th>
                            <th className="py-2 px-4 text-left font-bold">Time</th>
                            <th className="py-2 px-4 text-left font-bold">Action</th>
                        </tr>
                    </thead>
                    <tbody className="bg-white divide-y divide-gray-200">
                        {/* Rows */}
                        {quiz.map((singleQuiz) => (
                            <tr
                                key={singleQuiz._id}
                                className="transition-all duration-300 ease-in-out transform hover:scale-105 hover:bg-gray-100"
                            >
                                <td className="py-4 px-4">
                                    <div className="flex items-center space-x-3">
                                        <div className="w-20 h-20 rounded-full overflow-hidden">
                                            <img
                                                src={singleQuiz?.avatar ? singleQuiz.avatar : "https://i.ibb.co/njRJ2HP/banner.jpg"}
                                                alt="Avatar"
                                                className="w-full h-full object-cover"
                                            />
                                        </div>
                                        <div>
                                            <div className="font-bold">{singleQuiz.assignedName}</div>
                                            <div className="text-sm text-gray-500">{singleQuiz.designation}</div>
                                        </div>
                                    </div>
                                </td>
                                <td className="py-4 px-4">
                                    <div>
                                        <span className="font-bold">{singleQuiz.quizTitle}</span>
                                        <br />
                                        <span className="badge badge-ghost badge-sm">{singleQuiz?.quizType ? singleQuiz?.quizType : singleQuiz?.quizCategory}</span>
                                    </div>
                                </td>
                                <td className="py-4 px-4">{singleQuiz.Deficulty}</td>
                                <td className="py-4 px-4">{singleQuiz.totalTime} Minutes</td>
                                <td className="py-4 px-4">
                                    <Link to={`/quizdetails/${singleQuiz._id}`} className="btn btn-primary btn-xs">Start Quiz</Link>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>

            </div>

        </div>
    );
};

export default Quiz;