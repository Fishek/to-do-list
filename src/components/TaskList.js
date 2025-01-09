import Task from "./Task";

export default function TaskList({ tasks, onRemove, onToggle }) {
  return (
    <div style={{borderBottom:"2px solid #7EBA55"}}>
      <ul style={{ listStyle: "none", padding: "0px",  }}>
        {tasks.map((task) => (
          <li key={task.id}>
            <Task task={task} onRemove={onRemove} onToggle={onToggle} />
          </li>
        ))}
      </ul>
    </div>
  );
}
