import React, { useRef } from "react";
import { useMouse } from "../hooks/useMouse";
export default function Dot() {
  const ref = useRef(null);
  const pos = useMouse(ref);
  return (
    <div className="dot-container" ref={ref}>
      <div
        className="dot"
        style={{
          position: "absolute",
          left: `${pos.offsetX}px`,
          top: `${pos.offsetY}px`,
          borderRadius: "100%",
          width: "20px",
          height: "20px",
          background: "red",
        }}
      ></div>
    </div>
  );
}
