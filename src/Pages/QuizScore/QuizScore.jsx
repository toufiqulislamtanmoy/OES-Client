
import { Link, useLocation } from 'react-router-dom';
import useAxiosSecure from '../../Hooks/useAxiosSecure';
import { useEffect, useState } from 'react';

const QuizScore = () => {
  const location = useLocation();
  const insertedId = location.state?.insertedId;
  const [axiosSecure] = useAxiosSecure();
  const [quizScoreData, setQuizScoreData] = useState(null); // State to hold quiz score data

  console.log('Inserted ID:', insertedId);

  // Create an asynchronous function to fetch quiz score data
  const fetchData = async () => {
    try {
      const getResponse = await axiosSecure.get(`/quizscore/${insertedId}`);
      setQuizScoreData(getResponse.data); // Set quiz score data in the state
    } catch (error) {
      console.error('Error fetching quiz score data:', error);
    }
  };

  // Use useEffect to trigger the data fetching when the component mounts
  useEffect(() => {
    fetchData();
  }, [insertedId]); // Run the effect when the insertedId changes


  const passOrFail = "Pass";


  console.log(quizScoreData);


  const motivationalMessage =
    quizScoreData?.quizResult === 'Pass'
      ? "🏆 Keep it up! Maintain your consistency."
      : "Don't worry, failure is a stepping stone to success. Keep learning and trying.";

  return (
    <div className="flex items-center justify-center h-screen">
      <div className="bg-gray-200 p-4 rounded-md shadow-md text-center">
        <h2 className="text-2xl font-bold mb-4">Your Quiz Score</h2>
        <p className="text-lg">
          You answered <span className="text-green-500 font-bold">{quizScoreData?.correctAnswers}</span> out of{' '}
          <span className="font-bold">{quizScoreData?.totalQuestion}</span> questions correctly.
        </p>
        <p className="mt-4">
          Result: <span className={quizScoreData?.quizResult === "Pass" ? 'text-green-500' : 'text-red-500'}>{quizScoreData?.quizResult}</span>
        </p>
        <p className="mt-4">{motivationalMessage}</p>

        {passOrFail === 'Pass' && (
          <Link to="/ranking" className="mt-4 inline-block btn btn-link px-4 py-2 rounded-md">
            View Ranking Board
          </Link>
        )}
      </div>

    </div>
  );
};

export default QuizScore;
