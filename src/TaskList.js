import React from "react";
import "./styles.css";

function TaskList({
  pendingTasks,
  handleDelete,
  toggleComplete,
  completedTasks
}) {
  return (
    <>
      {pendingTasks.map((task) => (
        <div name={task.name} key={task.id} finished="false" id={task.id}>
          <div>
            <div>
              <input
                onChange={() => toggleComplete(task)}
                type="checkbox"
                className="form-check-input box"
              />
            </div>
            <div>{task.name}</div>
            <div>
              <button id={task.id} onClick={handleDelete}>
                Delete
              </button>
            </div>
          </div>
        </div>
      ))}
      <h1>Completed below</h1>
      {completedTasks.map((task) => (
        <div name={task.name} key={task.id} finished="true" id={task.id}>
          <div>
            <div>
              <input
                type="checkbox"
                className="form-check-input box"
                defaultChecked
                onChange={() => toggleComplete(task)}
              />
            </div>
            <div>{task.name}</div>
            <div>
              <button id={task.id} onClick={handleDelete}>
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

