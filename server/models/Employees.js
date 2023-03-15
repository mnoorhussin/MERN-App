const mongoose = require("mongoose");

const EmployeesSchema = new mongoose.Schema({
  name: {
    type: String,
  },
  department: {
    type: String,
  },
  position: {
    type: String,
  },
  salary: {
    type: Number,
  },
  id: {
    type: Number,
  },
});
const EmployeesModel = mongoose.model("employees", EmployeesSchema);
module.exports = EmployeesModel;
