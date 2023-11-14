
const RankingList = () => {
  const users = [
    { name: 'Erfan', score: 120 },
    { name: 'Tushar', score: 105 },
    { name: 'Tanvir', score: 95 },
    { name: 'Tanvi', score: 80 },
    { name: 'Loki', score: 75 },
  ];

  const sortedUsers = users.sort((a, b) => b.score - a.score);

  return (
    <div className="max-w-xl mx-auto my-8">
      <h2 className="text-3xl font-bold mb-4">Ranking List</h2>
      <ul>
        {sortedUsers.map((user, index) => (
          <li
            key={index}
            className="flex items-center justify-between p-4 bg-white shadow-md rounded-md mb-2"
          >
            <div className="flex items-center space-x-4">
              <span className="text-lg font-semibold">{index + 1}</span>
              <div>
                <h3 className="text-lg font-semibold">{user.name}</h3>
                <p className="text-gray-600">Score: {user.score}</p>
              </div>
            </div>
            {/* Add any additional information or badges */}
            {index === 0 && (
              <span className="bg-yellow-500 text-white px-2 py-1 rounded-md">Top Player</span>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default RankingList;
