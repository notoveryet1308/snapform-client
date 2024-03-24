export type PlayerDataType = {
  id: string;
  name: string;
  avatar?: string;
  isAdmin?: boolean;
};

export enum PLAYER_ACTION {
  PLAYER_ONBOARDING = "PLAYER_ONBOARDING",
  PLAYER_ONBOARDED = "PLAYER_ONBOARDED",
  PLAYER_QUESTION_RESPONSE = "PLAYER_QUESTION_RESPONSE",
  PLAYER_DISCONNECTED = "PLAYER_DISCONNECTED",
}

export enum ADMIN_ACTION {
  ADMIN_ONBOARDING = "ADMIN_ONBOARDING",
  ADMIN_ONBOARDED = "ADMIN_ONBOARDED",
  PLAYER_BULK_ONBOARDING_TO_ADMIN = "PLAYER_BULK_ONBOARDING_TO_ADMIN",
  ADMIN_QUESTION_RESPONSE = "ADMIN_QUESTION_RESPONSE",
  ADMIN_PLAYER_ONBOARDED = "ADMIN_PLAYER_ONBOARDED",
}

export enum GAME_COUNT_DOWN {
  START = "count-down-start",
  DONE = "count-down-done",
  IN_PROGRESS = "count-down-in-progress",
}

export enum ADMIN_GAME_ACTION {
  PLAY_GAME = "PLAY_GAME",
  PAUSE_GAME = "PAUSE_GAME",
  SKIP_QUESTION = "SKIP_QUESTION",
  PLAY_PAUSE = "PLAY_PAUSE",
}

export type AdminGameControlType = {
  [ADMIN_GAME_ACTION.PLAY_PAUSE]:
    | ADMIN_GAME_ACTION.PLAY_GAME
    | ADMIN_GAME_ACTION.PAUSE_GAME
    | null;
  [ADMIN_GAME_ACTION.SKIP_QUESTION]: ADMIN_GAME_ACTION.SKIP_QUESTION | null;
};

export type PlayerOnboardingType = {
  action: PLAYER_ACTION.PLAYER_ONBOARDING;
  payload: PlayerDataType;
};

export type PlayerOnboardedType = {
  action: PLAYER_ACTION.PLAYER_ONBOARDED;
  payload: PlayerDataType;
};

export type BulkPlayerOnboardToAdminType = {
  action: ADMIN_ACTION.PLAYER_BULK_ONBOARDING_TO_ADMIN;
  payload: PlayerDataType[];
};

export type messageFormat<T> = {
  action: string;
  payload: T;
};

export enum GAME_QUESTIONS {
  SENDING_QUESTION = "SENDING_QUESTION",
  SEND_QUESTION = "SEND_QUESTION",
  PAUSE = "PAUSE",
  SKIP = "SKIP",
  QUESTION_ITEM = "QUESTION_ITEM",
}

export enum ALL_QUESTION_TYPES {
  MULTI_SELECT = "multi-select",
  YES_NO_SELECT = "yes-no-select",
  SINGLE_SELECT = "single-select",
}

export const ALL_QUESTION_LIST: { [k: string]: ALL_QUESTION_TYPES } = {
  MULTI_SELECT: ALL_QUESTION_TYPES.MULTI_SELECT,
  YES_NO_SELECT: ALL_QUESTION_TYPES.YES_NO_SELECT,
  SINGLE_SELECT: ALL_QUESTION_TYPES.SINGLE_SELECT,
};

export interface QuestionOptionType {
  order: string;
  label: string;
  isCorrectChoice: boolean;
}

export interface QuizQuestionType {
  id: string;
  questionType: ALL_QUESTION_TYPES;
  title: string;
  description: string;
  options: QuestionOptionType[] | [];
}

export interface QuestionConfigureType {
  [id: string]: {
    timeLimit: string;
    point: string;
  };
}

export interface YesNoOptionType {
  label: string;
  isCorrectChoice: boolean;
}

export type MultiSelectDataType = {
  questionType: ALL_QUESTION_TYPES;
  title: string;
  description: string;
  options: QuestionOptionType[] | [];
  id: string;
};

export type QuestionSelectProps = {
  valueFromParent?: QuizQuestionType;
  sendDataToParent?: (data: QuizQuestionType) => void;
};

export interface LiveQuizDataType {
  id: string;
  title: string;
  questions: QuizQuestionType[];
  activeQuestionId: string;
  configuration: QuestionConfigureType;
}

export interface LiveQuizResponseDataType
  extends Omit<LiveQuizDataType, "activeQuestionId"> {
  createdAt?: Date;
  isLiveQuiz?: boolean;
}

export interface QueryAllLiveQuizResponseDataType {
  data: LiveQuizResponseDataType[];
  status: string;
}

export interface QuerySingleLiveQuizResponseDataType {
  data: LiveQuizResponseDataType;
  status: string;
}

export interface MutationLiveQuizResponseDataType {
  data: LiveQuizResponseDataType;
  status: string;
}

export type ChoiceButtonDataType = {
  order: string;
  placeholder: string;
  value?: string;
  isCorrectChoice: boolean;
};

export interface MultiSelectQuizQuestionViewType {
  id: string;
  questionType: ALL_QUESTION_TYPES;
  title: string;
  description: string;
  options: QuestionOptionType[];
  timeLimit: number;
  point: number;
  getSelectedOption: (data: OptionResponseDataType[]) => void;
  onTimeOver: () => void;
}

export interface SingleSelectQuizQuestionViewType {
  id: string;
  questionType: ALL_QUESTION_TYPES;
  title: string;
  description: string;
  options: QuestionOptionType[];
  timeLimit: number;
  point: number;
  getSelectedOption: (data: OptionResponseDataType) => void;
  onTimeOver: () => void;
}

export interface OptionResponseDataType extends QuestionOptionType {
  isSelected: boolean;
}

export interface QuizQuestionServerType {
  id: string;
  questionType: ALL_QUESTION_TYPES;
  title: string;
  description: string;
  options: QuestionOptionType[];
  timeLimit: number;
  point: number;
}

export interface LiveQuizServerDataType {
  id: string;
  title: string;
  questions: QuizQuestionServerType[];
}

export enum QUIZ_DATA_ACTION {
  JOINED_PLAYER = "JOINED_PLAYER",
  SEND_QUIZ_DATA = "SEND_QUIZ_DATA",
  LIVE_QUIZ_ID = "LIVE_QUIZ_ID",
  IS_QUIZ_LIVE = "IS_QUIZ_LIVE",
  SEND_NEXT_QUESTION = "SEND_NEXT_QUESTION",
  QUIZ_OVER = "QUIZ_OVER",
  SHOW_OUTCOME = "SHOW_OUTCOME",
  SHOW_FINAL_OUTCOME = "SHOW_FINAL_OUTCOME",
}

export enum QUIZ_STATUS {
  LIVE = "LIVE",
  NOT_LIVE = "NOT_LIVE",
  FETCHING = "FETCHING",
}

export interface PlayerQuizQuestionResponseDataType {
  player: PlayerDataType;
  quizId: string;
  questionId: string;
  selectedOption: OptionResponseDataType[] | OptionResponseDataType | [];
  point: number;
  responseTime: number;
}
