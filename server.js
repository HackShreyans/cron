const express = require("express");
const mongoose = require("mongoose");

//dotenv file use for hiding sensitive data
require("dotenv").config();

const app = express();

// this is used for data reading and posting
app.use(express.json());

//checking api work properly or not
app.get("/", (req, res) => {
  res.send("get the api");
});
app.use(require("./Routes/userRoute"));

//mongoose db connectvity
const URI = process.env.mng_dbss;

mongoose.connect(
  URI,
  {
    useNewUrlParser: true,

    useUnifiedTopology: true
  },
  err => {
    if (err) throw err;
    console.log("Connected to MongoDB!!!");
  }
);

//listening port
app.listen(process.env.PORT, () => {
  console.log(`app is listening port: http://localhost:${process.env.PORT}`);
});
