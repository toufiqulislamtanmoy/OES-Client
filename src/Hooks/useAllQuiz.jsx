import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "./useAxiosSecure";


const useAllQuiz = () => {
    const [axiosSecure] = useAxiosSecure();
    const { data: quiz = [], isLoading: loading, refetch } = useQuery({
        queryKey: ['quiz'],
        queryFn: async () => {
            // const res = await fetch('http://localhost:5000/quiz');
            // return res.json();
            const response = await axiosSecure(`/quiz`)
            return response.data;
        }
    })

    return {quiz, loading, refetch};
};

export default useAllQuiz;