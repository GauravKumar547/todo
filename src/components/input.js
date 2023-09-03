import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { saveTask } from "../features/todoSlice";
import "./input.css";
const Input = () => {
  const [input, setInput] = useState("");
  const dispatch = useDispatch();
  const addTask = () => {
    const dispatched = dispatch(
      saveTask({
        task: input,
        done: false,
        id: Date.now(),
      })
    );
    setInput("");
    return dispatched;
  };
  return (
    <div className="input">
      <input
        type="text"
        name="task-data"
        value={input}
        placeholder="Enter your task here..."
        onKeyUp={(event) => {
          if (event.key === "Enter") {
            setInput(event.target.value);
            return addTask();
          }
        }}
        onChange={(event) => setInput(event.target.value)}
      />
      <button className="add" onClick={addTask}>
        Add
      </button>
    </div>
  );
};

export default Input;
