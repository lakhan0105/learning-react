import React from "react";
import Task from "./Task";

function TasksSection({ tasksData, handleDel, handleStatus }) {
  return (
    <section className="tasks-section center">
      {tasksData.map((taskData, index) => {
        return (
          <Task
            key={index}
            taskData={taskData}
            handleDel={handleDel}
            handleStatus={handleStatus}
          ></Task>
        );
      })}
    </section>
  );
}

export default TasksSection;
