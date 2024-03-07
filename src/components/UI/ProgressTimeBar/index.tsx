import { useEffect, useLayoutEffect, useRef, useState } from "react";
import { StyledProgressBarWrapper } from "./style";

const ProgressTimeBar = ({ time }: { time: number }) => {
  const progressRef = useRef<HTMLDivElement>(null);
  const [currentProgress, setCurrentProgress] = useState(0);
  const [progressWidth, setProgressWidth] = useState<number | null>(null);

  useLayoutEffect(() => {
    if (progressRef.current) {
      const { width } = progressRef.current.getBoundingClientRect();
      setProgressWidth(width);
    }
  }, [progressRef]);

  useEffect(() => {
    let timerId: NodeJS.Timeout;
    if (progressWidth !== null && currentProgress < progressWidth) {
      const progressLengthPerSec = progressWidth / time;
      timerId = setInterval(() => {
        setCurrentProgress((prevProgress) =>
          Math.min(prevProgress + progressLengthPerSec, progressWidth)
        );
      }, 1000);
    }

    return () => clearInterval(timerId);
  }, [currentProgress, progressWidth, time]);

  return (
    <StyledProgressBarWrapper ref={progressRef}>
      <div
        className="progress-status"
        style={{ width: `${(currentProgress / progressWidth) * 100}%` }}
      ></div>
    </StyledProgressBarWrapper>
  );
};

export default ProgressTimeBar;
