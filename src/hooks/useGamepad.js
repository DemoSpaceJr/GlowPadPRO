import { useEffect, useState } from "react";

export function useGamepad() {
  const [pads, setPads] = useState([]);

  useEffect(() => {
    const update = () => {
      const gamepads = navigator.getGamepads ? navigator.getGamepads() : [];
      setPads([...gamepads].filter(Boolean));
    };

    window.addEventListener("gamepadconnected", update);
    window.addEventListener("gamepaddisconnected", update);
    const interval = setInterval(update, 100);

    return () => {
      clearInterval(interval);
      window.removeEventListener("gamepadconnected", update);
      window.removeEventListener("gamepaddisconnected", update);
    };
  }, []);

  return pads;
}
