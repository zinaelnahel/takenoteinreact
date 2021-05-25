import React, { useState } from "react";
import "./styles.css";
import ReactDOM from "react-dom";
import TaskList from "./TaskList";

export default function App() {
  const [tasks, setTasks] = useState([
    // {
    //   id: "1",
    //   finished: false,
    //   name: "Cooking"
    // },
  ]);

  const [finishedTasks, changeStatus] = useState([
    // {
    //   id: "1",
    //   finished: true,
    //   name: "Groceries"
    // },
  ]);

  function handleComplete(event) {
    console.log(event.target);
    const completedTasks = tasks.filter((task) => task.finished === true);
    console.log(completedTasks);
    changeStatus([...completedTasks]);
    const incompleteTasks = tasks.filter((task) => task.finished === false);
    setTasks([...incompleteTasks]);
  }

  function handleDelete(event) {
    //console.log(event.target.id);
    const filteredTasks = tasks.filter((task) => task.id != event.target.id);
    //console.log(filteredTasks);
    setTasks([...filteredTasks]);
  }
  //function addTask(name) {}
  const handleSubmit = (event) => {
    event.preventDefault();
    const newTask = {
      id: Math.floor(Math.random() * 999),
      finished: false,
      name: event.target.newTask.value,
    };
    setTasks([...tasks, newTask]);
    event.target.reset();
  };
  return (
    <div className="App">
      <div className="block">
        <form onSubmit={handleSubmit}>
          <input
            id=""
            finished=""
            name="newTask"
            placeholder="Add Task Here..."
          />
          <button>Add</button>
        </form>
      </div>
      <div className="block">
        <div>
          <TaskList
            tasks={tasks}
            completedTasks={finishedTasks}
            handleDelete={handleDelete}
            handleComplete={handleComplete}
          />
        </div>
      </div>
    </div>
  );
}
