import { useState } from "react";
import { Header } from "./components/Header";
import { Cart } from "./components/Cart";
import { useGlobalContext } from "./context/Context";

function App() {
  const { isLoading } = useGlobalContext();

  if (isLoading) {
    return (
      <main>
        <h1>Loading...</h1>
      </main>
    );
  }

  return (
    <main>
      <Header></Header>
      <Cart></Cart>
    </main>
  );
}

export default App;
