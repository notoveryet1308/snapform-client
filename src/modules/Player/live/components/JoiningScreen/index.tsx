import { StyledJoiningScreenWrapper } from "./style";
import Input from "../../../../../components/UI/Input";
import Button from "../../../../../components/UI/Button";

function JoiningScreen({
  getPlayerName,
  onGameJoin,
}: {
  getPlayerName: ({ name }: { name: string }) => void;
  onGameJoin: () => void;
}) {
  const handleInputChange = (value: string) => {
    getPlayerName({ name: value });
  };
  return (
    <StyledJoiningScreenWrapper>
      <Input
        name="player-name-input"
        type="text"
        onInputChange={handleInputChange}
      />
      <Button name="Join" onClick={onGameJoin} />
    </StyledJoiningScreenWrapper>
  );
}

export default JoiningScreen;
