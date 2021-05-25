import React, { useState } from "react";

const Form = (props) => {
  const number = props.number;

  const addTask = props.addTask;

  function MyInputs(props) {
    return (
      <input
        id="2"
        placeholder="Add task here..."
        value={name}
        onChange={handleChange}
      ></input>
    );
  }

  const [name, setName] = useState("");
  console.log(props.number);

  function handleChange(e) {
    setName(e.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();
    addTask(name);
    setName("");
  }

  return (
    <form onSubmit={handleSubmit}>
      <MyInputs count={number} />
      <button>Add</button>
    </form>
  );
};

export default Form;
