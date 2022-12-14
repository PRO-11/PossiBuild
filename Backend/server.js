require('dotenv').config()
const express = require('express');
const userRouter = require('./routes/user');
const connectDatabase = require("./db");
const path = require("path");
const app = express();
var cors = require('cors');
app.use(cors())
connectDatabase()
app.use(express.json());
app.use(userRouter);
if(process.env.NODE_ENV === "production") {
  app.use(express.static("frontend/build"));
  app.get("/*", function(req, res) {
      res.sendFile(path.join(__dirname, "./frontend/build/index.html"));
    }); }
    
const PORT=process.env.PORT ||5000;
app.listen(PORT, () => {
  console.log('port is listening');
});