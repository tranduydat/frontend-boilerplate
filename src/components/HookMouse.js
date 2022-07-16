import React, { useState } from "react";

function HookMouse() {
  const [x, setX] = useState(0);
  const [y, setY] = useState(0);

  const logMousePosition = (e) => {
    console.log("Mouse event");
    setX(e.clientX);
    setY(e.clientY);
  };

  useState(() => {
    console.log("useEffect called");
    window.addEventListener("mousemove", logMousePosition);

    return () => {
      console.log("Component unmounting code");
      window.removeEventListener("mousemove", logMousePosition);
    };
  }, []); // empty array = only once rendered

  return (
    <div>
      Hooks X - {x} Y - {y}
    </div>
  );
}

export default HookMouse;
