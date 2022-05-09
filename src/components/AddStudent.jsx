import { useState } from "react";

export const AddStudent = () => {

  const [form,setForm]=useState({});

  const carryChange=(e)=>{
    const{name,value}=e.target;
    setForm({
      ...form,
      [name]:value,
    });
  };

  const postdata=(el)=>{
    el.preventDefault();
    fetch("http://localhost:8080/students",{
      method: "POST",
      body: JSON.stringify(form),
      headers:{"content-Type":"application/json"},
    });
  }


  return (
    <form className="addstudent" onSubmit={postdata}>
      <div>
        name:{" "}
        <input
          type="text"
          name="name"
          className="name"
          placeholder="enter name"
          onChange={carryChange}
        />
      </div>
      
      <div>
        {" "}
        age:
        <input
          type="number"
          name="age"
          className="age"
          placeholder="enter age"
          onChange={carryChange}
        />
      </div>

      
      
      <div>
        address:{" "}
        <input
          type="text"
          name="address"
          className="address"
          placeholder="address"
          onChange={carryChange}
        />{" "}
      </div>
      <div>
        department:{" "}
        <input
          type="text"
          name="department"
          className="department"
          placeholder="department"
          onChange={carryChange}
        />{" "}
      </div>
      <div>
        {" "}
        salary:
        <input
          type="number"
          name="salary"
          className="salary"
          placeholder="salary"
          onChange={carryChange}
        />
      </div>
      <div>
        <select
          value={""} // select dropdown needs both value and onChange attributes
          name="maritalstate"
          className="maritalstate"
          onChange={carryChange}
        >
          <option value="Married">Married</option>
          <option value="Unmarried">Unmarried</option>
          
        </select>
      </div>

      <input className="submit" type="submit" value="Submit" />
      {
        // <div className="error"></div>
        // show this div with proper error before submitting form, if there's anything not provided
        // eg: first name missing, age cannot be greater than 100 etc
      }
    </form>
  );
};
