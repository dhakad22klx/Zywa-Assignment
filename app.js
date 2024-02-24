const express = require("express");
const mongoose = require("mongoose");
const userRoutes = require("./User/Routes/userRoutes");
const cors = require("cors");
const setData = require("./SetUpData/setData");

const app = express();
const hostname = "localhost";
const port = 3000;
app.use(express.json());
app.use(cors());

mongoose.connect("mongodb://localhost:27017/zywa");

setData();



app.use("/user",userRoutes);

// app.get("/user/getcardstatus",(req,res)=>{
//   res.send('<h2>Running properly</h2>')
// });

app.get("/", (req, res) => {
  res.send('<h1>Running properly</h1>');
  // res.send({
  //   total : 100,
  //   additional : 10
  // });
});

app.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});