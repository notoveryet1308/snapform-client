import React, { useEffect } from "react";

type useOutsideClickProps = {
  handler: (event: Event) => void;
  ref: React.RefObject<HTMLElement>;
};

export const useOutsideClickHook = ({ handler, ref }: useOutsideClickProps) => {
  useEffect(() => {
    const listener = (event: Event) => {
      const current = ref.current as HTMLElement | null;

      // Do nothing if clicking ref's element or descendent elements
      if (
        !current ||
        current.contains(event.target as Node)
        // [...document.querySelectorAll("[data-prevent-outside-click]")].some(
        //   (el) => el.contains(event.target as Node)
        // )
      ) {
        return;
      }

      handler(event);
    };

    document.addEventListener("pointerdown", listener);
    document.addEventListener("touchstart", listener);
    return () => {
      document.removeEventListener("pointerdown", listener);
      document.removeEventListener("touchstart", listener);
    };
  }, [ref, handler]);
};
