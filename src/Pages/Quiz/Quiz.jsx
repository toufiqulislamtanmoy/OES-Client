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
                <table className="table text-center">
                    {/* head */}
                    <thead>
                        <tr >

                            <th>Assigner Details</th>
                            <th>Quiz Details</th>
                            <th>Deficulty</th>
                            <th>Time</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {/* row 1 */}
                        {/* <tr>
                            
                            <td>
                                <div className="flex items-center space-x-3">
                                    <div className="avatar">
                                        <div className="mask  w-20 ">
                                            <img src="https://i.ibb.co/njRJ2HP/banner.jpg" alt="Avatar Tailwind CSS Component" />
                                        </div>
                                    </div>
                                    <div>
                                        <div className="font-bold">Toufiqul Islam Tanmoy</div>
                                        <div className="text-sm opacity-50">Professor</div>
                                    </div>
                                </div>
                            </td>
                            <td>
                                <span className="font-bold">Basic C Programming</span>
                                <br />
                                <span className="badge badge-ghost badge-sm">Problem Solving</span>
                            </td>
                            <td>Professional</td>
                            <td>15 minutes</td>
                            <th>
                                <Link to={`/quizdetails/${1}`} className="btn btn-ghost btn-xs">Start Quiz</Link>
                            </th>
                        </tr> */}
                        {
                            quiz.map(singleQuiz =>
                                <tr key={singleQuiz._id}>

                                    <td>
                                        <div className="flex items-center space-x-3">
                                            <div className="avatar">
                                                <div className="mask  w-20 ">
                                                    <img src={singleQuiz?.avatar ? singleQuiz.avatar : "https://i.ibb.co/njRJ2HP/banner.jpg"} alt="Avatar Tailwind CSS Component" />
                                                </div>
                                            </div>
                                            <div>
                                                <div className="font-bold">{singleQuiz.assignedName}</div>
                                                <div className="text-sm opacity-50">Professor</div>
                                            </div>
                                        </div>
                                    </td>
                                    <td>
                                        <span className="font-bold">{singleQuiz.quizTitle}</span>
                                        <br />
                                    <span className="badge badge-ghost badge-sm">{singleQuiz.quizType}</span>
                                    </td>
                                    <td>{singleQuiz.Deficulty}</td>
                                    <td>{singleQuiz.totalTime} Minutes</td>
                                    <th>
                                        <Link to={`/quizdetails/${singleQuiz._id}`} className="btn btn-ghost btn-xs">Start Quiz</Link>
                                    </th>
                                </tr>

                            )
                        }
                      

                    </tbody>


                </table>
            </div>

        </div>
    );
};

export default Quiz;