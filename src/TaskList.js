import React from "react";
import "./styles.css";

function TaskList({ tasks, handleDelete, handleComplete, completedTasks }) {
  return (
    <>
      {tasks.map((tasks) => (
        <div key={tasks.id} finished={tasks.finished}>
          <div>
            <div>
              <input
                finished="false"
                type="checkbox"
                className="form-check-input box"
                onChange={handleComplete}
              />
            </div>
            <div>{tasks.name}</div>
            <div>
              <button id={tasks.id} onClick={handleDelete}>
                Delete
              </button>
            </div>
          </div>
        </div>
      ))}
      <h1>Completed below</h1>
      {completedTasks.map((tasks) => (
        <div key={completedTasks.id} finished={completedTasks.finished}>
          <div>
            <div>
              <input
                finished="true"
                type="checkbox"
                className="form-check-input box"
                onChange={handleComplete}
                checked
              />
            </div>
            <div>{tasks.name}</div>
            <div>
              <button id={completedTasks.id} onClick={handleDelete}>
                Delete
              </button>
            </div>
          </div>
        </div>
      ))}
    </>
  );
}

export default TaskList;

// Function that will handle the deletion.
// sorting the taskarray, reassign to array without the target of the trigger
