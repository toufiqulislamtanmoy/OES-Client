import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "./useAxiosSecure";


const useLeadarBoard = () => {
    const [axiosSecure] = useAxiosSecure();
    const { data: leaderboard = [], isLoading: loading, refetch } = useQuery({
        queryKey: ['leaderboard'],
        queryFn: async () => {
            // const res = await fetch('https://online-quiz-server.vercel.app/leaderboard');
            // return res.json();
            const response = await axiosSecure(`/leaderboard`)
            return response.data;
        }
    })

    return {leaderboard, loading, refetch};
};

export default useLeadarBoard;