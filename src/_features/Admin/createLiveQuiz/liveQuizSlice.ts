import { createSlice, nanoid } from "@reduxjs/toolkit";
import {
  ALL_QUESTION_TYPES,
  QuizQuestionType,
  QuestionConfigureType,
} from "../../../type";

type LiveQuizType = {
  id: string;
  title: string;
  questions: QuizQuestionType[];
  activeQuestionId: string;
  configuration: QuestionConfigureType;
};

type CreateQuizInitialStateType = {
  liveQuiz: LiveQuizType;
};

const DEFAULT_TIME_LIMIT = "20";
const DEFAULT_POINT = "1000";

const initialState: CreateQuizInitialStateType = {
  liveQuiz: {
    id: "",
    title: "",
    questions: [],
    activeQuestionId: "",
    configuration: {},
  },
};

const LiveQuizSlice = createSlice({
  name: "create-live-quiz",
  initialState,
  reducers: {
    createLiveQuiz: (state) => {
      const quizId = nanoid();
      const questionId = nanoid();
      const liveQuiz: LiveQuizType = {
        id: quizId,
        title: "My live quiz",
        questions: [
          {
            id: questionId,
            questionType: ALL_QUESTION_TYPES.MULTI_SELECT,
            title: "",
            description: "",
            option: [],
          },
        ],
        activeQuestionId: questionId,
        configuration: {
          [questionId]: {
            timeLimit: DEFAULT_TIME_LIMIT,
            point: DEFAULT_POINT,
          },
        },
      };
      return { ...state, liveQuiz };
    },
    updateQuestionData: (state, action) => {
      const questions = state.liveQuiz.questions.map((d) => {
        if (d.id === action.payload.id) {
          return action.payload;
        }
        return d;
      });

      state.liveQuiz.questions = questions;
    },
    addQuestionType: (state, action) => {
      const { questionType, id } = action.payload;
      state.liveQuiz.questions.push({
        id,
        questionType,
        title: "",
        description: "",
        option: [],
      });
      state.liveQuiz.activeQuestionId = id;
      state.liveQuiz.configuration = {
        ...state.liveQuiz.configuration,
        [id]: {
          timeLimit: DEFAULT_TIME_LIMIT,
          point: DEFAULT_POINT,
        },
      };
    },
    updateActiveQuestionId: (state, action) => {
      const { activeQuestionId } = action.payload;
      state.liveQuiz.activeQuestionId = activeQuestionId;
    },
    updateTimeLimitConfiguration: (state, action) => {
      const { id, value } = action.payload;

      if (state.liveQuiz.configuration[id]) {
        state.liveQuiz.configuration[id].timeLimit = value;
      } else {
        state.liveQuiz.configuration[id] = {
          timeLimit: value,
          point: DEFAULT_POINT,
        };
      }
    },
    updatePointConfiguration: (state, action) => {
      const { id, value } = action.payload;

      if (state.liveQuiz.configuration[id]) {
        state.liveQuiz.configuration[id].point = value;
      } else {
        state.liveQuiz.configuration[id] = {
          point: value,
          timeLimit: DEFAULT_TIME_LIMIT,
        };
      }
    },
    removeQuizQuestion: (state, action) => {
      const { qId } = action.payload;
      const filteredList = state.liveQuiz.questions.filter((d) => d.id !== qId);

      const { id } = filteredList[0];

      console.log({ afterR: id, qId, filteredList });

      state.liveQuiz.questions = state.liveQuiz.questions.filter((d) => {
        if (d.id !== qId) return d;
      });
      state.liveQuiz.activeQuestionId = id;
      delete state.liveQuiz.configuration[qId];
    },
  },
});

export const {
  createLiveQuiz,
  updateQuestionData,
  addQuestionType,
  updateActiveQuestionId,
  updatePointConfiguration,
  updateTimeLimitConfiguration,
  removeQuizQuestion,
} = LiveQuizSlice.actions;

export default LiveQuizSlice.reducer;
