const express = require("express");
const fs = require("fs");
const cors = require("cors");
const path = require("path");
const bodyParser = require("body-parser");

const app = express();

app.use(cors());
const port = 4000;
app.listen(port,()=>{
  console.log("server instening on port",port)
})

app.use('/api/user',require("./routes/movieRouter"))