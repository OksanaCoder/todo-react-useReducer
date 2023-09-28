import React from "react";
import Task from "../Task";

const TaskList = ({ tasks, filter, handleRemoveTask, handleDoneTask }) => {
  return (
    <div>
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
