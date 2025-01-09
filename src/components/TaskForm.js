import { useState } from "react";

export default function TaskForm({ onSubmit }) {
  const [task, setTask] = useState({
    name: "",
    priority: "",
    deadline: "",
    taskStatus: "In Progress",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setTask((prevTask) => ({
      ...prevTask,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(task);
    task.name = "";
  };

  return (
    <div style={{ display: "flex", height: "100px", alignItems: "center" }}>
      <form
        onSubmit={handleSubmit}
        style={{ display: "flex", alignItems: "center" }}
      >
        <input
          name="name"
          placeholder="What's your task.."
          value={task.name}
          type="text"
          onChange={handleChange}
          style={{
            fontSize: "17px",
            borderRadius: "10px",
            border: "2px solid #557eba",
            width: "240px",
            height: "36px",
            padding: "4px",
            marginRight: "10px",
            fontFamily: "inherit",
          }}
        />

        <select
          name="priority"
          value={task.priority}
          onChange={handleChange}
          style={{
            fontSize: "17px",
            width: "140px",
            height: "48px",
            borderRadius: "10px",
            border: "2px solid #557eba",
            padding: "4px",
            marginRight: "10px",
            fontFamily: "inherit",
            color: "#557eba",
          }}
        >
          <option selected>Priority...</option>
          <option value="High">High</option>
          <option value="Medium">Medium</option>
          <option value="Low">Low</option>
        </select>
        <input
          name="deadline"
          value={task.deadline}
          type="date"
          onChange={handleChange}
          style={{
            marginRight: "10px",
            height: "44px",
            border: "2px solid #557eba",
            fontSize: "17px",
            textAlign: "center",
            borderRadius: "10px",
            fontFamily: "inherit",
            color: "#557eba",
          }}
        />
        <button className="add-button" type="submit">
          +
        </button>
      </form>
    </div>
  );
}
