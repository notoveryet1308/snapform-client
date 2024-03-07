export type PlayerDataType = { id: string; name: string; avatar: string };

export enum PLAYER_ACTION {
  playerOnboarding = "player-onboarding",
  playerOnboarded = "player-onboarded",
  bulkPlayerOnboarded = "bulk-player-onboarding",
}

export enum ADMIN_ACTION {
  adminOnboarding = "admin-onboarding",
  adminOnboarded = "admin-onboarded",
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

export type playerOnboarding = {
  action: PLAYER_ACTION.playerOnboarding;
  payload: PlayerDataType;
};

export type playerOnboarded = {
  action: PLAYER_ACTION.playerOnboarded;
  payload: PlayerDataType;
};

export type bulkPlayerOnboarded = {
  action: PLAYER_ACTION.playerOnboarded;
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

export interface QuizQuestionViewType {
  id: string;
  questionType: ALL_QUESTION_TYPES;
  title: string;
  description: string;
  options: QuestionOptionType[];
  timeLimit: number;
  point: number;
  getSelectedOption: (data: OptionResponseDataType[]) => void;
}

export interface OptionResponseDataType extends QuestionOptionType {
  isSelected: boolean;
}
