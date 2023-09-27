import TaskFilter from "./components/TaskFilter";
import TaskForm from "./components/TaskForm";
import TaskList from "./components/TaskList";
import useTodo from "./components/hooks/useTodo";

function App() {
  const { state, handleAddTask, handleRemoveTask, handleDoneTask } = useTodo();
  return (
    <>
      <h2>ToDo List</h2>
      <TaskForm handleAddTask={handleAddTask} />
      <TaskFilter />
      <TaskList
        tasks={state.tasks}
        handleRemoveTask={handleRemoveTask}
        handleDoneTask={handleDoneTask}
      />
    </>
  );
}

export default App;
