const express = require('express')

const mysql = require("mysql");
const  cors = require("cors")





const app = express();

app.use(cors());


app.use(express.json());






const userRoute = require("./routes/User");
app.use("/user", userRoute);


const adminRoute = require("./routes/Admin");
app.use("/admin", adminRoute);

app.listen(3001,(req,res)=>{
  console.log("tezz")
})
