import React from "react";

function Task({ taskData, handleDel, handleStatus }) {
  const { taskName, taskStatus, id } = taskData;

  return (
    <article className="task">
      <input
        type="checkbox"
        checked={taskStatus ? true : false}
        onChange={() => {
          handleStatus(id);
        }}
        className="task-checkbox"
      />
      <p className="task-name">{taskName}</p>
      <button
        className="del-btn"
        onClick={() => {
          handleDel(id);
        }}
      >
        x
      </button>
    </article>
  );
}

export default Task;
