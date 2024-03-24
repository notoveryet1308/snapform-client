import { useEffect, useState } from "react";
import { useAdminSocket } from "../../../Context/adminSocketProvider";
import { useLiveQuizActivityData, useReadSocketMessage } from "../../../hooks";
import {
  ADMIN_ACTION,
  GAME_COUNT_DOWN,
  GAME_QUESTIONS,
  QuizQuestionServerType,
} from "../../../type";

const COUNTDOWN_TIMER = 5;

export const useGameAdminCountDown = () => {
  const socket = useAdminSocket();
  const [isCountDownStarted, setCountDownStarted] = useState(false);
  const [isCountDownDone, setCountDownDone] = useState(false);
  const [countDownNumber, setCountDownNumber] = useState<number>();

  const serverMessage = useReadSocketMessage<number>({ ws: socket });

  useEffect(() => {
    if (!isCountDownDone && socket && !isCountDownStarted) {
      const countDownMessage = {
        action: GAME_COUNT_DOWN.START,
        payload: COUNTDOWN_TIMER,
      };
      socket.send(JSON.stringify(countDownMessage));
      setCountDownStarted(() => true);
    }

    if (serverMessage && socket) {
      const { action, payload } = serverMessage;

      if (action === GAME_COUNT_DOWN.IN_PROGRESS) {
        setCountDownNumber(() => payload);
      }

      if (action === GAME_COUNT_DOWN.DONE) {
        setCountDownDone(() => true);
        socket.send(
          JSON.stringify({
            action: GAME_QUESTIONS.SEND_QUESTION,
            payload: GAME_QUESTIONS.SEND_QUESTION,
          })
        );
      }
    }
  }, [
    socket,
    isCountDownDone,
    serverMessage,
    isCountDownStarted,
    countDownNumber,
  ]);

  return { countDownNumber, isCountDownDone };
};

export const useAdminGameManager = () => {
  const [currentQuestion, setCurrentQuestion] =
    useState<QuizQuestionServerType | null>(null);
  const socket = useAdminSocket();
  const serverMessage = useReadSocketMessage<object>({ ws: socket });

  const { sendPlayerResponse, selectedOption, handleOptionSelection } =
    useLiveQuizActivityData({
      socket,
      sendResponseAction: ADMIN_ACTION.ADMIN_QUESTION_RESPONSE,
    });

  useEffect(() => {
    if (socket && serverMessage) {
      const { action, payload } = serverMessage;
      if (action === GAME_QUESTIONS.QUESTION_ITEM) {
        setCurrentQuestion(payload as QuizQuestionServerType);
      }
    }
  }, [socket, serverMessage]);

  return {
    currentQuestion,
    sendPlayerResponse,
    handleOptionSelection,
    selectedOption,
  };
};
