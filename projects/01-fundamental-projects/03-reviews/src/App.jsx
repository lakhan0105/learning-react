import { useState } from "react";
import { Container } from "./Container";
import data from "./data";

function App() {
  const [index, setIndex] = useState(0);

  const nextCard = () => {
    if (index < data.length - 1) {
      setIndex((prev) => {
        return prev + 1;
      });
    } else {
      setIndex(0);
    }
  };

  const prevCard = () => {
    if (index === 0) {
      setIndex(data.length - 1);
    } else {
      setIndex((prev) => {
        return prev - 1;
      });
    }
  };

  const randomCard = () => {
    const randIndex = Math.floor(Math.random() * data.length);
    setIndex(randIndex);
  };

  return (
    <main>
      <Container
        data={data[index]}
        nextCard={nextCard}
        prevCard={prevCard}
        randomCard={randomCard}
      ></Container>
    </main>
  );
}

export default App;
