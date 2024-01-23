import { useState } from "react";
import data from "./data";
import { useEffect } from "react";
import { Questions } from "./Questions";

const App = () => {
  const [cardData, setCardData] = useState(data);

  return (
    <main>
      <Questions cardData={cardData}></Questions>
    </main>
  );
};
export default App;
