import React from "react";
import styles from "./Task.module.scss";

const Task = ({
  task: { id, body, isDone },
  handleRemoveTask,
  handleDoneTask
}) => {
  const handleDelete = () => {
    handleRemoveTask({ id });
  };
  const handleDone = () => {
    handleDoneTask({ id, isDone: !isDone });
  };
  return (
    <div className={styles.flexRow}>
      <li className={isDone ? styles.isDone : styles.notDone}>{body}</li>
      <button onClick={handleDelete}>delete</button>
      <input type="checkbox" checked={isDone} onChange={handleDone} />
    </div>
  );
};

export default Task;
