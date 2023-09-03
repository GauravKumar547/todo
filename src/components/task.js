import React from "react";
import Checkbox from "@material-ui/core/Checkbox";
import { useDispatch } from "react-redux";
import { setCheck, deleteToDoTask } from "../features/todoSlice";
import "./task.css";

const Task = ({ value, done, id }) => {
    const dispatch = useDispatch();

    const handleCheck = () => {
        dispatch(setCheck(id));
    };
    const deleteTask = () => {
        dispatch(deleteToDoTask(id));
    };
    return (
        <div className="todo-item">
            <Checkbox
                checked={done}
                color="primary"
                onChange={handleCheck}
                inputProps={{ "aria-label": "secondary checkbox" }}
            />
            <p className={done ? "done" : "not-done"}>{value}</p>
            <button className="del-task" onClick={deleteTask}>
                x
            </button>
            <p className="message-popup">Delete Task</p>
        </div>
    );
};

export default Task;
