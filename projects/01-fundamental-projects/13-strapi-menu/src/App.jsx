import { useRef } from "react";
import { Sidebar } from "./components/Sidebar";
import { Hero } from "./components/Hero";
import { Header } from "./components/Header";
import { useGlobalContext } from "./context/Context";
import { FloatingSubCont } from "./components/FloatingSubCont";

function App() {
  const {} = useGlobalContext();

  return (
    <main>
      <div className="center">
        <Header></Header>

        <FloatingSubCont></FloatingSubCont>

        <Hero></Hero>
        <Sidebar></Sidebar>
      </div>
    </main>
  );
}

export default App;
