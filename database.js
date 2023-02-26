require("dotenv").config();
const mongoose = require("mongoose");

const connectDatabase = () => {
mongoose
.connect(process.env.MONGO_URL)
.then(() => console.log("DB connection Successfull!"))
.catch((err) => console.log(err));
}

module.exports = connectDatabase;