import axios from "axios";

import { BASE_URL_SERVER } from "../../../../../appConfig";
import { LiveQuizResponseDataType } from "../../../../../type";

const createLiveQuizApi = async (data: LiveQuizResponseDataType) => {
  const response = axios.post<LiveQuizResponseDataType>(
    `${BASE_URL_SERVER}/live-quiz`,
    data
  );

  return (await response).data;
};

export { createLiveQuizApi };
