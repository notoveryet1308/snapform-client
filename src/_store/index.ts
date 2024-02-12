import { configureStore } from "@reduxjs/toolkit";
import liveQuizReducer from "../_features/Admin/createLiveQuiz/liveQuizSlice";
import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";

export const store = configureStore({
  reducer: { liveQuiz: liveQuizReducer },
});

export const useAppDispatch: () => typeof store.dispatch = useDispatch;
export const useAppSelector: TypedUseSelectorHook<
  ReturnType<typeof store.getState>
> = useSelector;
