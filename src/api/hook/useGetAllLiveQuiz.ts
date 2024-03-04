import { useQuery } from "@tanstack/react-query";
import { getAllLiveQuiz } from "../utils/liveQuizApi";

const useGetAllLiveQuiz = () => {
  const { isError, isLoading, isFetched, data } = useQuery({
    queryKey: ["all-live-quiz"],
    queryFn: getAllLiveQuiz,
  });

  return { isError, isLoading, isFetched, data };
};

export default useGetAllLiveQuiz;
