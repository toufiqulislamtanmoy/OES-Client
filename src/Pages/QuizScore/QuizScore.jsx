
import { Link } from 'react-router-dom';

const QuizScore = () => {
  const userScore = 4; // Replace with the actual user score
  const totalQuestions = 5; // Replace with the total number of questions

  // Calculate the percentage
  const percentage = (userScore / totalQuestions) * 100;

  // Determine pass or fail
  const passOrFail = percentage >= 80 ? 'Pass' : 'Fail';

  // Motivational messages
  const motivationalMessage =
    passOrFail === 'Pass'
      ? "🏆 Keep it up! Maintain your consistency."
      : "Don't worry, failure is a stepping stone to success. Keep learning and trying.";

  return (
    <div className="flex items-center justify-center h-screen">
      <div className="bg-gray-200 p-4 rounded-md shadow-md text-center">
        <h2 className="text-2xl font-bold mb-4">Your Quiz Score</h2>
        <p className="text-lg">
          You answered <span className="text-green-500 font-bold">{userScore}</span> out of{' '}
          <span className="font-bold">{totalQuestions}</span> questions correctly.
        </p>
        <p className="mt-4">
          Result: <span className={percentage >= 80 ? 'text-green-500' : 'text-red-500'}>{passOrFail}</span>
        </p>
        <p className="mt-4">{motivationalMessage}</p>
        
        {/* Add a link to the ranking board */}
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
