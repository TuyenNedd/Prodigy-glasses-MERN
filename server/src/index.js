const express = require("express");
const dotenv = require("dotenv");
const mongoose = require("mongoose");
const routes = require("./routes");
const cors = require("cors");
// const bodyParser = require('body-parser')
const cookieParser = require("cookie-parser");

dotenv.config();

const app = express();
const port = process.env.PORT || 3001;

app.use(cors());
app.use(express.json({ limit: "50mb" }));
app.use(express.urlencoded({ limit: "50mb" }));
// app.use(bodyParser.json())
app.use(cookieParser());

routes(app);
mongoose.set("strictQuery", false);

// mongoose.connect(`${process.env.MONGO_DB}`)
// mongoose
// .connect("mongodb://localhost:27017/pgdglass")
mongoose
  .connect(
    "mongodb+srv://namlo:e6q8vlzQKUH28SUZ@cluster0.mkjtgy4.mongodb.net/aaaaaaaa?retryWrites=true&w=majority"
  )
  .then(() => {
    console.log("Connect Db success!");
  })
  .catch((err) => {
    console.log(err);
  });
app.listen(port, () => {
  console.log("Server is running in port: ", +port);
});
