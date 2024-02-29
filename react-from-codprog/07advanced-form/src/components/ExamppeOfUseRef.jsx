import React, { useRef } from "react";

function ExamppeOfUseRef() {
  const headingRef = useRef();

  function handleHeadingStyle() {
    headingRef.current.textContent = "Heading styles changed";
  }

  return (
    <div>
      <h1 className="heading" ref={headingRef}>
        this is a heading
      </h1>
      <button onClick={handleHeadingStyle}>change heading style</button>
    </div>
  );
}

export default ExamppeOfUseRef;
