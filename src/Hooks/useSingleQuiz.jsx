import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "./useAxiosSecure";

const useSingleQuiz = (id) => {
  const [axiosSecure] = useAxiosSecure();
  
  const { data: singleItem = {}, isLoading: loading, refetch } = useQuery({
    queryKey: ['singleItem', id],
    queryFn: async () => {
      const response = await axiosSecure(`/quizdetails/${id}`);
      return response.data;
    },
  });

  return { singleItem, loading, refetch };
};

export default useSingleQuiz;
