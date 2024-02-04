import { useState } from "react";
import { InputForm } from "./components/InputForm";
import { ItemsContainer } from "./components/ItemsContainer";
import { PageHeading } from "./components/PageHeading";

function App() {
  // getfrom LS
  const defaultList = JSON.parse(localStorage.getItem("list")) || [];

  // function to set to local storage
  function setLS(items) {
    if (items) {
      localStorage.setItem("list", JSON.stringify(items));
    }
  }

  // state value
  const [data, setData] = useState(defaultList);

  // function to handle the chekbox
  function handleCheck(eId) {
    const newItems = data.map((item) => {
      if (item.id === eId) {
        const newItem = { ...item, completed: !item.completed };
        return newItem;
      }
      return item;
    });
    setData(newItems);
    setLS(newItems);
  }

  return (
    <main>
      <section className="container">
        <PageHeading></PageHeading>
        <InputForm data={data} setData={setData} setLS={setLS}></InputForm>
        <ItemsContainer
          data={data}
          setData={setData}
          handleCheck={handleCheck}
          setLS={setLS}
        ></ItemsContainer>
      </section>
    </main>
  );
}

export default App;
