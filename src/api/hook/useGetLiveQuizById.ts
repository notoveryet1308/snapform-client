import { useQuery } from "@tanstack/react-query";
import { getLiveQuizById } from "../utils/liveQuizApi";

const useGetLiveQuizById = ({ quizId }: { quizId: string }) => {
  const { isError, isLoading, isFetched, data } = useQuery({
    queryKey: ["single-live-quiz"],
    queryFn: () => getLiveQuizById({ quizId }),
  });

  return { isError, isLoading, isFetched, data };
};

export default useGetLiveQuizById;
