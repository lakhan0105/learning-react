import FormSection from "./components/FormSection";
import PageTitle from "./components/PageTitle";
import TasksSection from "./components/TasksSection";
import { useAppContext } from "./context/AppProvider";

function App() {
  const {
    storageData,
    tasksData,
    dispatch,
    handleDel,
    handleSubmit,
    handleStatus,
  } = useAppContext();

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
