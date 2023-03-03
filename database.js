require("dotenv").config();
const mongoose = require("mongoose");

const connectDatabase = () => {
mongoose
.connect("mongodb+srv://Nahuel:44850508@node0.jgo4ibq.mongodb.net/?retryWrites=true&w=majority")
.then(() => console.log("DB connection Successfull!"))
.catch((err) => console.log(err));
}

module.exports = connectDatabase;