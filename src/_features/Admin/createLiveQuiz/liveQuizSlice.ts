import { createSlice, nanoid } from "@reduxjs/toolkit";
import { ALL_QUESTION_TYPES, LiveQuizDataType } from "../../../type";

type CreateQuizInitialStateType = {
  liveQuiz: LiveQuizDataType;
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
      const liveQuiz: LiveQuizDataType = {
        id: quizId,
        title: "My live quiz",
        questions: [
          {
            id: questionId,
            questionType: ALL_QUESTION_TYPES.MULTI_SELECT,
            title: "",
            description: "",
            options: [],
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
        options: [],
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

      state.liveQuiz.questions = state.liveQuiz.questions.filter((d) => {
        if (d.id !== qId) return d;
      });
      state.liveQuiz.activeQuestionId = id;
      delete state.liveQuiz.configuration[qId];
    },
    updateLiveQuizTitle: (state, action) => {
      const { id, title } = action.payload;

      if (id === state.liveQuiz.id) {
        state.liveQuiz.title = title;
      }
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
  updateLiveQuizTitle,
} = LiveQuizSlice.actions;

export default LiveQuizSlice.reducer;
