import { useState } from "react";

const ShortCircuitOverview = () => {
  const [text, setText] = useState(false);
  const [name, setName] = useState("Lakhan");

  return (
    <div>
      {/* {if(cond){"won't work"}} */}

      <h2>false OR: {text || "2nd"}</h2>
      <h2>false AND: {text && "2nd"}</h2>
      <h2>false OR: {name || "2nd"}</h2>
      <h2>false OR: {name && "2nd"}</h2>
    </div>
  );
};
export default ShortCircuitOverview;
