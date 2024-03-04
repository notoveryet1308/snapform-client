import { useMutation } from "@tanstack/react-query";

import { createLiveQuizApi } from "../utils/liveQuizApi";
import { useAppSelector } from "../../_store/";

const useCreateLiveQuizMutation = () => {
  const { liveQuiz } = useAppSelector((state) => state.liveQuiz);
  const quizMutation = useMutation({
    mutationKey: ["create-live-quiz"],
    mutationFn: createLiveQuizApi,
  });

  const handleCreateMutation = () => {
    quizMutation.mutate(liveQuiz);
  };

  return { handleCreateMutation };
};

export default useCreateLiveQuizMutation;
