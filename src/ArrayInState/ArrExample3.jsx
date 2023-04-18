import { useState } from "react";

let initialShapes = [
  { id: 0, type: "circle", x: 50, y: 580 },
  { id: 1, type: "square", x: 150, y: 580 },
  { id: 2, type: "circle", x: 250, y: 580 },
];

export default function ShapeEditor() {
  const [shapes, setShapes] = useState(initialShapes);

  function handleClick() {
    const nextShapes = shapes.map((shape) => {
      if (shape.type === "square") {
        // No change
        return shape;
      } else {
        // Return a new circle 50px below
        return {
          ...shape,
          y: shape.y + 50,
        };
      }
    });
    // Re-render with the new array
    setShapes(nextShapes);
  }

  return (
    <>
      <h2>Tranforming Array</h2>
      <button onClick={handleClick}>Move circles down!</button>
      {shapes.map((shape) => (
        <div
          key={shape.id}
          style={{
            background: "gray",
            position: "absolute",
            left: shape.x,
            top: shape.y,
            borderRadius: shape.type === "circle" ? "50%" : "",
            width: 30,
            height: 30,
          }}
        />
      ))}
    </>
  );
}
