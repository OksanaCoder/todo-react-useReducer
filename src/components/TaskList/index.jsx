import React, { useState } from "react";
import Task from "../Task";
import TYPES from "../../actionTypes";

const TaskList = ({
  tasks,
  filter,
  handleRemoveTask,
  handleDoneTask,
  handleFilterTask
}) => {
  return (
    <div>
      <select value={filter} onChange={(e) => handleFilterTask(e.target.value)}>
        <option value="all" selected>
          all
        </option>
        <option value="done">done</option>
        <option value="undone">undone</option>
      </select>
      <ul>
        {tasks.map((item) => {
          if (filter === "all") {
            return (
              <Task
                key={item.id}
                task={item}
                handleRemoveTask={handleRemoveTask}
                handleDoneTask={handleDoneTask}
              />
            );
          } else if (filter === "undone" && item.isDone === false) {
            return (
              <Task
                key={item.id}
                task={item}
                handleRemoveTask={handleRemoveTask}
                handleDoneTask={handleDoneTask}
              />
            );
          } else if (filter === "done" && item.isDone === true) {
            return (
              <Task
                key={item.id}
                task={item}
                handleRemoveTask={handleRemoveTask}
                handleDoneTask={handleDoneTask}
              />
            );
          }
          return null;
        })}
      </ul>
    </div>
  );
};

export default TaskList;
