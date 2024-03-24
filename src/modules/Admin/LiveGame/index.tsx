import { StyledLiveGameWrapper } from "./style";
import { useEffect } from "react";

import { useAdminGameAction, useGetLatestPlayerForAdmin } from "../hooks";
import { LiveGameHeader } from "../../../components/Header";
import JoinedPlayerList from "./components/JoinedPlayerList";
import GameControl from "./components/GameControl";
import GamePlay from "./components/GamePlay";
import {
  ADMIN_GAME_ACTION,
  QUIZ_DATA_ACTION,
  LiveQuizResponseDataType,
  LiveQuizServerDataType,
} from "../../../type";
import { useParams } from "react-router-dom";
import useGetLiveQuizById from "../../../api/hook/useGetLiveQuizById";
import Loader from "../../../components/UI/Loader";
import { useAdminSocket } from "../../../Context/adminSocketProvider";

const convertQuizData = (
  data: LiveQuizResponseDataType
): LiveQuizServerDataType => {
  const questions = data.questions.map((question) => {
    const configuration = data.configuration[question.id];

    return {
      ...question,
      point: Number(configuration.point),
      timeLimit: Number(configuration.timeLimit),
    };
  });

  return { ...data, questions: questions };
};

function LiveGame() {
  const { gameId } = useParams();
  const adminSocket = useAdminSocket();
  const { isError, isLoading, data } = useGetLiveQuizById({
    quizId: gameId,
  });
  const { joinedPlayers, isAdminOnboarded } = useGetLatestPlayerForAdmin();
  const { onGamePlayPauseAction, onGameSkipQuestionAction, adminGameControl } =
    useAdminGameAction();

  useEffect(() => {
    if (!isError && !isLoading && data && adminSocket && isAdminOnboarded) {
      const message = {
        action: QUIZ_DATA_ACTION.SEND_QUIZ_DATA,
        payload: convertQuizData(data),
      };
      adminSocket.send(JSON.stringify(message));
    }
  }, [adminSocket, data, isAdminOnboarded, isError, isLoading]);

  return (
    <StyledLiveGameWrapper>
      {isLoading && <Loader />}
      {!isError && !isLoading && data && (
        <>
          <LiveGameHeader
            gameName={data.title}
            isLive
            livePlayerCount={joinedPlayers.length}
            playerDetail={null}
          />
          <GameControl
            onGamePlayPause={onGamePlayPauseAction}
            onGameSkipQuestionAction={onGameSkipQuestionAction}
            isPlayerJoined={!!joinedPlayers.length}
            gameControl={adminGameControl}
          />
          <JoinedPlayerList
            gameControl={adminGameControl}
            joinedPlayer={joinedPlayers}
          />
          {adminGameControl?.[ADMIN_GAME_ACTION.PLAY_PAUSE] ===
            ADMIN_GAME_ACTION.PLAY_GAME && (
            <GamePlay gameControl={adminGameControl} gameId={gameId} />
          )}
        </>
      )}
    </StyledLiveGameWrapper>
  );
}

export default LiveGame;
