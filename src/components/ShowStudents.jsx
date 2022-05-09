import { useEffect, useState } from "react";
import "../App.css"
export const ShowStudents = () => {

  const [mydata,setMydata]=useState([])

  useEffect(()=>{

    async function getData(){
      const data= await fetch("http://localhost:8080/students").then((d)=>d.json())

      setMydata(data)
    }
    getData()


  },[])

  return (
    <div className="mytable">
      
      <table className="table">
        <thead>
          <tr>
            <th>Name</th>
            <th>Age</th>
            <th>Address</th>
            <th>Department</th>
            <th>Salary</th>
            <th>marital state</th>
          </tr>
        </thead>
        <tbody className="tbody">
          {/* populate all rows like below: */}
          {mydata.map((el)=>(
            <tr className="row">
            <td className="name">{el.name}</td>
            <td className="age">{el.age}</td>
            <td className="address">{el.address}</td>
            
            <td className="department">{el.department}</td>
            <td className="salary">{el.salary}</td>
            <td className="maritalstate">{el.maritalstate}</td>
            
          </tr>
          ))}
          
     
          
        </tbody>
      </table>
    </div>
  );
};
