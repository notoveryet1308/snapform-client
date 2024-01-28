import { PaperPlaneRight } from "phosphor-react";

import { StyledJoiningScreenWrapper } from "./style";
import { Input, TextArea } from "../../../../../components/UI/Input";
import { PrimaryButton } from "../../../../../components/UI/Button";
import PlayerPreview from "../../../../../components/PlayerPreview";
import { PlayerDataType } from "../../../../../type";

function JoiningScreen({
  getPlayerName,
  onGameJoin,
  isPlayerJoined,
  playerDetails,
}: {
  getPlayerName: ({ name }: { name: string }) => void;
  onGameJoin: () => void;
  isPlayerJoined: boolean;
  playerDetails: PlayerDataType | null;
}) {
  const handleInputChange = (value: string) => {
    getPlayerName({ name: value });
  };

  return (
    <StyledJoiningScreenWrapper>
      {!isPlayerJoined ? (
        <>
          <Input
            placeholder="Enter your name"
            name="player-name-input"
            type="text"
            onInputChange={handleInputChange}
            maxCharLimit={40}
          />

          <PrimaryButton
            icon={<PaperPlaneRight />}
            name="Join"
            onClick={onGameJoin}
            disabled={!playerDetails?.name}
          />
        </>
      ) : (
        playerDetails && <PlayerPreview {...playerDetails} />
      )}
    </StyledJoiningScreenWrapper>
  );
}

export default JoiningScreen;
