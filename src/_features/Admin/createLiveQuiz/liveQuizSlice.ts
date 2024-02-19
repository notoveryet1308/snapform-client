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
    },
    updateActiveQuestionId: (state, action) => {
      const { activeQuestionId } = action.payload;
      state.liveQuiz.activeQuestionId = activeQuestionId;
    },
  },
});

export const {
  createLiveQuiz,
  updateQuestionData,
  addQuestionType,
  updateActiveQuestionId,
} = LiveQuizSlice.actions;

export default LiveQuizSlice.reducer;
