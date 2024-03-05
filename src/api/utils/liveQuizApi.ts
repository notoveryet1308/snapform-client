import axios from "axios";

import { BASE_URL_SERVER } from "../../appConfig";
import {
  MutationLiveQuizResponseDataType,
  QueryAllLiveQuizResponseDataType,
  QuerySingleLiveQuizResponseDataType,
  LiveQuizResponseDataType,
} from "../../type";

const createLiveQuizApi = async (data: LiveQuizResponseDataType) => {
  const response = await axios.post<MutationLiveQuizResponseDataType>(
    `${BASE_URL_SERVER}/live-quiz`,
    data
  );

  return response.data;
};

const getAllLiveQuiz = async () => {
  const response = await axios.get<QueryAllLiveQuizResponseDataType>(
    `${BASE_URL_SERVER}/live-quiz`
  );

  return response.data.data;
};

const getLiveQuizById = async ({ quizId }: { quizId: string }) => {
  const response = await axios.get<QuerySingleLiveQuizResponseDataType>(
    `${BASE_URL_SERVER}/live-quiz/id/${quizId}`
  );

  return response.data.data;
};

export { createLiveQuizApi, getAllLiveQuiz, getLiveQuizById };
