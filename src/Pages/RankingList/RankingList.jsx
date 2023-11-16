import useLeadarBoard from "../../Hooks/useLeadarBoard";

const RankingList = () => {
  const { leaderboard } = useLeadarBoard();
  console.log(leaderboard);


  return (
    <div className="max-w-5xl mx-auto my-8">
      <h2 className="text-3xl font-bold mb-4">Ranking List</h2>
      <ul>
        {leaderboard.map((user, index) => (
          <li
            key={index}
            className="flex items-center justify-between p-4 bg-white shadow-md rounded-md mb-2 hover:shadow-lg transition duration-300 ease-in-out transform hover:scale-105"
          >
            <div className="flex items-center space-x-4">
              <span className="text-lg font-semibold">{index + 1}</span>
              <div>
                <h3 className="text-lg font-semibold text-indigo-600">{user.name}</h3>
                <p className="text-gray-600">Score: {user.totalPoints}</p>
              </div>
            </div>

            {index === 0 && (
              <span className="bg-yellow-500 text-white px-2 py-1 rounded-md">Top Scorer 🌟</span>
            )}
          </li>
        ))}
      </ul>
    </div>


  );
};

export default RankingList;
