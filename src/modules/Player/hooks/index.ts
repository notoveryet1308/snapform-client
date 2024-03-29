import { useEffect, useState } from "react";
import { nanoid } from "nanoid";

import {
  PLAYER_ACTION,
  PlayerDataType,
  AdminGameControlType,
  ADMIN_GAME_ACTION,
  GAME_COUNT_DOWN,
  GAME_QUESTIONS,
  QUIZ_DATA_ACTION,
  QUIZ_STATUS,
  QuizQuestionServerType,
} from "../../../type";
import { useLivePlayerSocket } from "../../../Context/livePlayerSocketProvider";
import { useReadSocketMessage, useLiveQuizActivityData } from "../../../hooks";

export const useOnboardPlayer = () => {
  const [playerDetails, setPlayerDetails] = useState<PlayerDataType | null>(
    null
  );
  const [isPlayerOnboarded, setIsPlayerOnboarded] = useState(false);

  const livePlayerSocket = useLivePlayerSocket();

  const handlePlayerDetail = ({ name }: { name: string }) => {
    if (name) {
      const playerId = nanoid();
      const avatarLink = `https://robohash.org/${playerId}`;
      setPlayerDetails({ id: playerId, avatar: avatarLink, name });
    } else {
      setPlayerDetails({ id: "", avatar: "", name });
    }
  };

  const onPlayerJoining = () => {
    if (livePlayerSocket && playerDetails) {
      const message = {
        action: PLAYER_ACTION.PLAYER_ONBOARDING,
        payload: playerDetails,
      };
      livePlayerSocket.send(JSON.stringify(message));
    }
  };

  useEffect(() => {
    if (livePlayerSocket) {
      livePlayerSocket.onmessage = (event) => {
        const { action, payload } = JSON.parse(event.data);

        if (
          action === PLAYER_ACTION.PLAYER_ONBOARDED &&
          payload.id === playerDetails?.id
        ) {
          setIsPlayerOnboarded(true);
        }
      };
    }
  }, [livePlayerSocket, playerDetails?.id]);

  return {
    onPlayerJoining,
    handlePlayerDetail,
    playerDetails,
    isPlayerOnboarded,
  };
};

export const useListenAdminGameAction = () => {
  const playerSocket = useLivePlayerSocket();
  const [adminGameAction, setAdminGameAction] =
    useState<AdminGameControlType | null>(null);

  const serverMessage = useReadSocketMessage({ ws: playerSocket });

  useEffect(() => {
    if (serverMessage) {
      const { action, payload } = serverMessage;

      if (action === ADMIN_GAME_ACTION.PLAY_GAME) {
        setAdminGameAction((prevControl) => ({
          ...(prevControl || { SKIP_QUESTION: null }),
          PLAY_PAUSE: ADMIN_GAME_ACTION[payload as "PLAY_GAME"],
        }));
      }
      if (action === ADMIN_GAME_ACTION.PAUSE_GAME) {
        setAdminGameAction((prevControl) => ({
          ...(prevControl || { SKIP_QUESTION: null }),
          PLAY_PAUSE: ADMIN_GAME_ACTION[payload as "PAUSE_GAME"],
        }));
      }
      if (action === ADMIN_GAME_ACTION.SKIP_QUESTION) {
        setAdminGameAction((prevControl) => ({
          ...(prevControl || { PLAY_PAUSE: null }),
          SKIP_QUESTION: ADMIN_GAME_ACTION[payload as "SKIP_QUESTION"],
        }));
      }
    }
  }, [serverMessage]);

  return adminGameAction;
};

export const useGamePlayerCountDown = () => {
  const socket = useLivePlayerSocket();
  const [countDownNumber, setCountDownNumber] = useState<number>();
  const [isCountDownDone, setCountDownDone] = useState<boolean>(false);

  const serverMessage = useReadSocketMessage<number>({ ws: socket });

  useEffect(() => {
    if (serverMessage && socket) {
      const { action, payload } = serverMessage;

      if (action === GAME_COUNT_DOWN.IN_PROGRESS) {
        setCountDownNumber(() => payload);
      }
      if (action === GAME_COUNT_DOWN.DONE) {
        setCountDownDone(() => true);
      }
    }
  }, [serverMessage, socket]);

  return { countDownNumber, isCountDownDone };
};

export const usePlayerGameManager = () => {
  const [currentQuestion, setCurrentQuestion] =
    useState<QuizQuestionServerType | null>(null);
  const socket = useLivePlayerSocket();
  const serverMessage = useReadSocketMessage<object>({ ws: socket });

  const { handleOptionSelection, selectedOption, sendPlayerResponse } =
    useLiveQuizActivityData({
      socket,
      sendResponseAction: PLAYER_ACTION.PLAYER_QUESTION_RESPONSE,
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

export const useQuizLiveStatus = () => {
  const playerSocket = useLivePlayerSocket();
  const [isQuizLive, setQuizLive] = useState<QUIZ_STATUS>(QUIZ_STATUS.FETCHING);

  const serverMessage = useReadSocketMessage({ ws: playerSocket });

  useEffect(() => {
    if (serverMessage) {
      const { action, payload } = serverMessage;

      if (action === QUIZ_DATA_ACTION.IS_QUIZ_LIVE) {
        setQuizLive(!!payload ? QUIZ_STATUS.LIVE : QUIZ_STATUS.NOT_LIVE);
      }
    }
  }, [serverMessage]);

  return { isQuizLive };
};
