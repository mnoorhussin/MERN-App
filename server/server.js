const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const app = express();

app.use(express.json());
app.use(cors());

mongoose.connect(
  "mongodb+srv://mustafaimana:cxJyjDfdT4Lkf0fJ@cluster0.vxskaf0.mongodb.net/MernProject?retryWrites=true&w=majority"
);

const EmployeesModel = require("./models/Employees");

app.get("/employees", async (req, res) => {
  const employees = await EmployeesModel.find();
  res.json(employees);
});

app.listen("3001", () => {
  console.log("server works");
});
