require("dotenv").config()
const express = require("express");
const connectDatabase = require("./database");
const cloudinary = require("cloudinary");
const cors = require('cors');
const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");
const fileUpload = require("express-fileupload");
const product = require("./src/routes/productRoutes");
const user = require("./src/routes/userRoutes");
const order = require("./src/routes/orderRoutes");
const payment = require("./src/routes/paymentRoutes");
const errorMiddleware = require("./src/middleware/error");

const app = express();

app.use(cors());
app.use(express.json());
app.use(cookieParser());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(fileUpload());


//Routes
app.use("/api", product);
app.use("/api", user);
app.use("/api", order);
app.use("/api", payment)

app.use(errorMiddleware)

connectDatabase()

/* const CLOUDINARY_NAME ="nahue"
const CLOUDINARY_API_KEY="563213948782747"
const CLOUDINARY_API_SECRET="Q_YOUSsfn9SOldRytAdgIS-S-zw" */

cloudinary.config({
    cloud_name: process.env.CLOUDINARY_NAME,
    api_key: process.env.CLOUDINARY_API_KEY,
    api_secret: process.env.CLOUDINARY_API_SECRET,
  });

const PORT = process.env.PORT || 5000
app.listen(PORT, () => {
    console.log("Server is running on port", PORT)
});