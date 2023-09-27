import React from "react";
import Task from "../Task";

const TaskList = ({ tasks, handleRemoveTask, handleDoneTask }) => {
  console.log(tasks, "state");
  return (
    <div>
      <ul>
        {tasks.map((item) => {
          return (
            <Task
              key={item.id}
              task={item}
              handleRemoveTask={handleRemoveTask}
              handleDoneTask={handleDoneTask}
            />
          );
        })}
      </ul>
    </div>
  );
};

export default TaskList;
