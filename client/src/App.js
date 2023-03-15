import Axios from "axios";
import { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

export default function App() {
  const [employees, setEmployees] = useState([]);

  useEffect(() => {
    Axios.get("http://localhost:3001/employees").then((res) => {
      setEmployees(res.data);
    });
  }, []);
  return (
    <div className="card-container d-flex flex-wrap py-5 ">
      {employees.map((employee) => {
        return (
          <div className="card mx-2 my-2" key={employee._id}>
            <div className="card-header bg-primary text-white">
              {employee.name}
            </div>
            <ul className="list-group list-group-flush">
              <li className="list-group-item">Position: {employee.position}</li>
              <li className="list-group-item">
                Department: {employee.department}
              </li>
              <li className="list-group-item">Salary: {employee.salary} CHF</li>
            </ul>
          </div>
        );
      })}
    </div>
  );
}
