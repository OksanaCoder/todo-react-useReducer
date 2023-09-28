import { useReducer } from "react";
import { v4 as uuidv4 } from "uuid";
import TYPES from "../../actionTypes";
import reducer from "../../reducer";

const useTodo = () => {
  const initialState = {
    tasks: [],
    filter: "all"
  };
  const [state, dispatch] = useReducer(reducer, initialState);
  const handleAddTask = (body) => {
    dispatch({ type: TYPES.ADD_TASK, payload: body });
  };
  const handleRemoveTask = ({ id }) => {
    dispatch({ type: TYPES.REMOVE_TASK, payload: { id } });
  };
  const handleDoneTask = ({ id }) => {
    dispatch({ type: TYPES.DONE_TASK, payload: { id } });
  };
  return { state, handleAddTask, handleRemoveTask, handleDoneTask };
};

export default useTodo;
