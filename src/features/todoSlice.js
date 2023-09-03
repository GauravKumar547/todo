import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  tasksList: [],
};

const todoSlice = createSlice({
  name: "tasks",
  initialState,
  reducers: {
    saveTask: (state, action) => {
      if (action.payload.task !== "") {
        state.tasksList.push(action.payload);
      }
    },
    setCheck: (state, action) => {
      state.tasksList.map((item) => {
        if (action.payload === item.id) {
          if (item.done === true) {
            item.done = false;
          } else {
            item.done = true;
          }
        }
        return true;
      });
    },
    deleteToDoTask: (state, action) => {
      state.tasksList.map((item, idx) => {
        if (action.payload === item.id) {
          state.tasksList.splice(idx, 1);
        }
        return true;
      });
    },
  },
});

export const { saveTask, setCheck, deleteToDoTask } = todoSlice.actions;
export const selectedTaskList = (state) => state.todos.tasksList;
export default todoSlice.reducer;
