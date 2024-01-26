import { StyledCountdownWrapper } from "./style";

function Countdown({ countdownNumber }: { countdownNumber: number }) {
  return (
    <StyledCountdownWrapper>
      <h2 className="countdown-label">Game will start in</h2>
      <p className="countdown-number">{countdownNumber}</p>
    </StyledCountdownWrapper>
  );
}

export default Countdown;
