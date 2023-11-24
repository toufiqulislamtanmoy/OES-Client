import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "./useAxiosSecure";
import { useContext } from "react";
import { AuthContext } from "../Provider/AuthProviders";

const useIndividualQuizDetails = () => {
    const [axiosSecure] = useAxiosSecure();
    const {user} = useContext(AuthContext);
    const { data: indquiz = [], isLoading: loading, refetch } = useQuery({
        queryKey: ['indquiz'],
        queryFn: async () => {
            // const res = await fetch('http://localhost:5000/indquiz');
            // return res.json();
            const response = await axiosSecure(`/individualQuiz/${user?.email}`)
            return response.data;
        }
    })

    return { indquiz, loading, refetch };
};

export default useIndividualQuizDetails;