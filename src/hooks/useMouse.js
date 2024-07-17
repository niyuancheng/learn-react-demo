import { useEffect, useState } from "react";

export function useMouse(ref) {
  const [pos, setPos] = useState({
    clientX: 0,
    clientY: 0,
    offsetX: 0,
    offsetY: 0,
  });
  const handleMouseMove = (e) => {
    setPos({
      clientX: e.clientX,
      clientY: e.clientY,
      offsetX: e.offsetX,
      offsetY: e.offsetY,
    });
  };
  useEffect(() => {
    const container = ref.current;
    container.addEventListener("mousemove", handleMouseMove);

    return () => {
      container.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return pos;
}
