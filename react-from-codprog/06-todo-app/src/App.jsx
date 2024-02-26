import { useState } from "react";
import FormSection from "./components/FormSection";
import PageTitle from "./components/PageTitle";
import TasksSection from "./components/TasksSection";

function App() {
  // get the LS data and pass into tasksData hook
  const storageData = JSON.parse(localStorage.getItem("tasks"));
  const [tasksData, setTasksData] = useState(storageData);

  // handleSubmit
  function handleSubmit(obj) {
    setTasksData((prev) => {
      return [...prev, obj];
    });
  }

  // handleDel
  function handleDel(eId) {
    setTasksData((prevData) => {
      return prevData.filter((item) => {
        if (eId !== item.id) {
          return item;
        }
      });
    });
  }

  // handleStatus
  function handleStatus(eId) {
    setTasksData((prevData) => {
      return prevData.map((item) => {
        if (item.id === eId) {
          return { ...item, taskStatus: !item.taskStatus };
        } else {
          return item;
        }
      });
    });
  }

  // set the LS data
  localStorage.setItem("tasks", JSON.stringify(tasksData || []));

  return (
    <main>
      <PageTitle></PageTitle>

      <FormSection handleSubmit={handleSubmit}></FormSection>

      <TasksSection
        tasksData={tasksData}
        handleDel={handleDel}
        handleStatus={handleStatus}
      ></TasksSection>
    </main>
  );
}

export default App;
