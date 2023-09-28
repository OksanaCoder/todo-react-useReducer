import TaskFilter from "./components/TaskFilter";
import TaskForm from "./components/TaskForm";
import TaskList from "./components/TaskList";
import useTodo from "./components/hooks/useTodo";

function App() {
  const {
    state,
    handleAddTask,
    handleRemoveTask,
    handleDoneTask,
    handleFilterTask
  } = useTodo();
  return (
    <>
      <h2>ToDo List</h2>
      <TaskForm handleAddTask={handleAddTask} />
      <TaskFilter />
      <TaskList
        tasks={state.tasks}
        filter={state.filter}
        handleRemoveTask={handleRemoveTask}
        handleDoneTask={handleDoneTask}
        handleFilterTask={handleFilterTask}
      />
    </>
  );
}

export default App;
