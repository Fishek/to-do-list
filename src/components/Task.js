export default function Task({ task, onRemove, onToggle }) {
  return (
    <div>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          backgroundColor: task.isFinalized ? "#7EBA55" : "#557eba",
          height: "45px",
          marginBottom: "20px",
          paddingLeft: "15px",
          width: "950px",
          borderRadius: "10px",
          fontWeight: "200",
        }}
      >
        <input
          type="checkbox"
          checked={task.isFinalized}
          onChange={() => onToggle(task.id)}
          style={{ height: "20px", width: "20px", marginRight: "10px" }}
        />
        <div>
          {" "}
          <p style={{ width: "500px", color: "white" }}>{task.name}</p>
        </div>
        <div style={{ textAlign: "center" }}>
          <p style={{ width: "140px", color: "white" }}>{task.priority}</p>
        </div>
        <div style={{ textAlign: "center" }}>
          <p style={{ width: "140px", color: "white" }}>{task.deadline}</p>
        </div>

        <button
          onClick={() => onRemove(task)}
          style={{
            marginLeft: "40px",
            borderRadius: "5px",
            borderColor: "white",
            backgroundColor: "#557eba",
            border: "1px solid white",
            color: "white",
            cursor: "pointer",
          }}
        >
          x
        </button>
      </div>
    </div>
  );
}
