export default function Filter({ onFilterChange }) {
  return (
    <div style={{fontWeight:"100"}}>
      <select
        style={{ width: "200px", textAlign:"center", borderColor:"#557eba", borderRadius:"10px", fontWeight:"100", fontSize:"15px",}}
        onChange={(e) => onFilterChange(e.target.value)}
        defaultValue="all"
      >
        <option  value="all">Show All</option>
        <option value="finalized">Finalized</option>
        <option value="not finalized">Not Finalized</option>
      </select>
    </div>
  );
}
