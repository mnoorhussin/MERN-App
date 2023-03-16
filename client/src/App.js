import Axios from "axios";
import { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

export default function App() {
  const [employees, setEmployees] = useState([]);
  const [name, setName] = useState("");
  const [department, setDepartment] = useState("");
  const [position, setPosition] = useState("");
  const [salary, setSalary] = useState("");

  useEffect(() => {
    Axios.get("http://localhost:3001/employees").then((res) => {
      setEmployees(res.data);
    });
  }, [employees]);

  const createEmployee = () => {
    Axios.post("http://localhost:3001/createemployees", {
      name: name,
      position: position,
      department: department,
      salary: salary,
    });
  };
  return (
    <>
      <div className="container py-5">
        <h1 className="text-center pb-5">Create Employees</h1>

        <div className="row">
          <div className="col-md-3">
            <input
              type="text"
              className="form-control"
              placeholder="Name"
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div className="col-md-3">
            <input
              type="text"
              className="form-control"
              placeholder="Position"
              onChange={(e) => setPosition(e.target.value)}
            />
          </div>
          <div className="col-md-3">
            <input
              type="text"
              className="form-control"
              placeholder="Department"
              onChange={(e) => setDepartment(e.target.value)}
            />
          </div>
          <div className="col-md-2">
            <input
              type="number"
              className="form-control"
              placeholder="Salary"
              onChange={(e) => setSalary(e.target.value)}
            />
          </div>
          <div className="col-md-1">
            <button className="btn btn-primary" onClick={createEmployee}>
              Create
            </button>
          </div>
        </div>
      </div>

      <div className="card-container  container d-flex flex-wrap py-5 ">
        {employees.map((employee) => {
          return (
            <div className="card mx-2 my-2 row" key={employee._id}>
              <div className="card-header bg-primary text-white">
                {employee.name}
              </div>
              <ul className="list-group list-group-flush">
                <li className="list-group-item">
                  Position: {employee.position}
                </li>
                <li className="list-group-item">
                  Department: {employee.department}
                </li>
                <li className="list-group-item">
                  Salary: {employee.salary} CHF
                </li>
              </ul>
            </div>
          );
        })}
      </div>
    </>
  );
}
