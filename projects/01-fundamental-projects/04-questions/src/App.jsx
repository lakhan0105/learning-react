import { useState } from "react";
import { Container } from "./Container";
import data from "./data";

function App() {
  const [questions, setQuestions] = useState(data);

  console.log(questions);

  return (
    <main>
      <Container questions={questions}></Container>
    </main>
  );
}

export default App;
