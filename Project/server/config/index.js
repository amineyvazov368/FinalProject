const mongoose = require("mongoose");
const dotenv = require("dotenv");
dotenv.config();
const PORT =  5050;
const express = require("express");
const app = express();


//multer
const path = require('path')
app.use('/uploads', express.static(path.join(__dirname, '../uploads')));


mongoose
  .connect(
   "mongodb+srv://amineyvazov:aminamin@project2.ws3s31d.mongodb.net/?retryWrites=true&w=majority&appName=project2"
  )
  .then(() => console.log("Connected!"))
  .catch((err) => {
    console.log(err);
});
app.listen(PORT, () => {
  console.log(`Example app listening on port ${PORT}`);
});


module.exports = app;