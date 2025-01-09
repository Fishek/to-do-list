import "./App.css";
import { useState } from "react";
import TaskForm from "./components/TaskForm";
import TaskList from "./components/TaskList";
import { v4 as uuid } from "uuid";
import Header from "./components/Header";
import Filter from "./components/Filter";

function App() {
  const [taskList, setTaskList] = useState([]);
  const [filter, setFilter] = useState("all");

  const handleSubmit = (task) => {
    const taskWithId = { ...task, id: uuid(), isFinalized: false };
    setTaskList((prevTaskList) => [...prevTaskList, taskWithId]);
  };

  const handleRemove = (taskToRemove) => {
    setTaskList((prevTaskList) =>
      prevTaskList.filter((task) => task.id !== taskToRemove.id)
    );
  };

  const handleToggle = (taskId) => {
    setTaskList((prevTaskList) =>
      prevTaskList.map((task) =>
        task.id === taskId ? { ...task, isFinalized: !task.isFinalized } : task
      )
    );
  };

  const filteredTasks = taskList.filter((task) => {
    if (filter === "finalized") return task.isFinalized;
    if (filter === "not finalized") return !task.isFinalized;
    return true; // 'all'
  });

  // const handleSort = () => {
  //   taskList.sort
  // }

  return (
    <div className="App">
      <div style={{ display: "flex", borderBottom: "2px solid #7EBA55" }}>
        <h1 style={{ fontWeight: "800", color: "#557eba", fontSize: "40px" }}>
          Toodoo
        </h1>
        <h1 style={{ fontWeight: "800", color: "#7EBA55", fontSize: "40px" }}>
          App
        </h1>
      </div>

      <TaskForm onSubmit={handleSubmit} />
      <Header />
      <Filter onFilterChange={setFilter} />
      <TaskList
        tasks={filteredTasks}
        onRemove={handleRemove}
        onToggle={handleToggle}
      />
    </div>
  );
}

export default App;
