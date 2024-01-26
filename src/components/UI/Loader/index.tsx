import { StyledLoadWrapper } from "./style";

function Loader({
  loadingText,
  size = "medium",
}: {
  loadingText?: string;
  size?: "small" | "medium" | "large";
}) {
  return (
    <StyledLoadWrapper>
      <div className={`loader ${size}`} />
      {loadingText ? <span className="loading-text">{loadingText}</span> : null}
    </StyledLoadWrapper>
  );
}

export default Loader;
