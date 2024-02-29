import React, { useEffect, useState } from "react";

function MouseMoveEvent() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  const mouseEvent = (e) => {
    setMousePosition({ x: e.clientX, y: e.clientY });
    console.log("mouse event function is working");
  };

  useEffect(() => {
    document.addEventListener("mousemove", mouseEvent);

    // cleanup function
    return function () {
      document.removeEventListener("mousemove", mouseEvent);
    };
  }, []);

  return (
    <div>
      <p>x: {mousePosition.x}px</p>
      <p>y: {mousePosition.y}px</p>
    </div>
  );
}

export default MouseMoveEvent;
