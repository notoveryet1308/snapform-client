import axios from "axios";

import { BASE_URL_SERVER } from "../../appConfig";
import {
  MutationLiveQuizResponseDataType,
  QueryLiveQuizResponseDataType,
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
  const response = await axios.get<QueryLiveQuizResponseDataType>(
    `${BASE_URL_SERVER}/live-quiz`
  );

  return response.data.data;
};

export { createLiveQuizApi, getAllLiveQuiz };
