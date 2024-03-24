import { PlayerDataType } from "../../type";
import { StyledPlayerPreview } from "./style";

const PlayerPreview = ({
  avatar = "https://gravatar.com/avatar/b2ecd64fa3dd53cf88f79002c68de012?s=400&d=robohash&r=x",
  name,
  id,
  isAdmin,
}: PlayerDataType) => {
  return (
    <StyledPlayerPreview data-player-id={id}>
      <img src={avatar} className="player-preview-avatar" alt="player-avatar" />
      <h2 className="player-preview-name">{name}</h2>

      {isAdmin && <span className="admin-tag">Admin</span>}
    </StyledPlayerPreview>
  );
};

export default PlayerPreview;
