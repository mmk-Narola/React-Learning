import { useState } from "react";
import Background from "./Background.jsx";
import Box from "./Box.jsx";

const initialPosition = {
  x: 0,
  y: 0,
};

export default function Example4() {
  const [shape, setShape] = useState({
    color: "orange",
    position: initialPosition,
  });

  function handleMove(dx, dy) {
    setShape({
      ...shape,
      position: {
        x: shape.position.x + dx,
        y: shape.position.y + dy,
      },
    });
  }

  function handleColorChange(e) {
    setShape({
      ...shape,
      color: e.target.value,
    });
  }

  return (
    <>
      <div className="profile">
        <h1>Object in State Variable Example-4</h1>
        <select value={shape.color} onChange={handleColorChange}>
          <option value="orange">orange</option>
          <option value="lightpink">lightpink</option>
          <option value="aliceblue">aliceblue</option>
        </select>
        <Background position={initialPosition} />
        <Box color={shape.color} position={shape.position} onMove={handleMove}>
          Drag me!
        </Box>
      </div>
    </>
  );
}
