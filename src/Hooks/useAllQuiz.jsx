import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "./useAxiosSecure";


const useAllQuiz = () => {
    const [axiosSecure] = useAxiosSecure();
    const { data: quiz = [], isLoading: loading, refetch } = useQuery({
        queryKey: ['quiz'],
        queryFn: async () => {
            // const res = await fetch('https://online-quiz-server.vercel.app/quiz');
            // return res.json();
            const response = await axiosSecure(`/quiz`)
            return response.data;
        }
    })

    return {quiz, loading, refetch};
};

export default useAllQuiz;