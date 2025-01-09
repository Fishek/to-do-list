import Filter from "./Filter";


export default function Header() {
  

    return (
      <div style={{marginLeft: "49px", width:"965px", fontWeight:"300", }}>
      <div style= {{display: "flex", alignItems: "center",textAlign:"center" }}>
      <div style = {{width: "500px", display:"flex", alignItems:"center", }}>
      <p >Task Name</p> 
      
      </div>
      <button  className="priority-sort" style={{}}>Task Priority</button>
      <button  className="deadline-sort" style={{}}>Task Deadline</button>
      </div>
      </div>
    );
  }
  