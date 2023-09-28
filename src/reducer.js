import { v4 as uuidv4 } from "uuid";
import TYPES from "./actionTypes";
const reducer = (state, action) => {
  const {
    type,
    payload: { body, id }
  } = action;
  switch (type) {
    case TYPES.ADD_TASK: {
      const task = {
        id: uuidv4(),
        body: body,
        isDone: false
      };
      const newTasks = [...state.tasks, task];
      localStorage.setItem("tasks", JSON.stringify(newTasks));
      return {
        ...state,
        tasks: newTasks
      };
    }
    case TYPES.REMOVE_TASK: {
      const updatedTasks = state.tasks.filter((task) => task.id !== id);
      localStorage.setItem("tasks", JSON.stringify(updatedTasks));

      return {
        ...state,
        tasks: updatedTasks
      };
    }
    case TYPES.DONE_TASK: {
      const updatedTasks = state.tasks.map((task) => {
        if (task.id === id) {
          // Toggle the isDone property
          return { ...task, isDone: !task.isDone };
        }
        return task;
      });

      return {
        ...state,
        tasks: updatedTasks
      };
    }
    case TYPES.FILTER_TASK: {
      return {
        ...state,
        filter: action.payload
      };
    }

    default:
      return state;
  }
};

export default reducer;
