import { AddStudent } from "./components/AddStudent";
import { ShowStudents } from "./components/ShowStudents";
import "./App.css"
import { useState } from "react";

function App() {

  const [page,setPage]=useState(true)

  return (
    <div className="App">
      <button onClick={()=>{setPage(!page)}} className="togglebtn">{page ? "Add a new employee":"Go to employee list"}</button>
      {/* Show either  AddStudent component or ShowStudents dependeing on the above button click  */}
      {page ? <ShowStudents/>:<AddStudent/>}
      {/* make sure the table is shown initially, do not show form initially */}
      {/* make sure to show either of them do not both together */}
    </div>
  );
}

export default App;
