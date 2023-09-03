import "./App.css";
import Input from "./components/input";
import Task from "./components/task";
import { useSelector } from "react-redux";

import { selectedTaskList } from "./features/todoSlice";
function App() {
    const todoList = useSelector(selectedTaskList);
    return (
        <div className="App">
            <div className="app-container">
                <h1>Your Todo List</h1>
                <div
                    style={{
                        height: "1px",
                        width: "99%",
                        backgroundColor: "darkgray",
                        marginTop: "4px",
                        marginBottom: "4px",
                    }}
                />
                <div className="task-container">
                    {todoList && todoList.length > 0 ? (
                        todoList.map((item) => {
                            return (
                                <Task
                                    value={item.task}
                                    done={item.done}
                                    key={item.id}
                                    id={item.id}
                                />
                            );
                        })
                    ) : (
                        <div className="no-task-container">No task added.</div>
                    )}
                </div>
                <Input />
            </div>
        </div>
    );
}

export default App;
