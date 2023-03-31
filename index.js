const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
dotenv.config();
const mongoose = require("mongoose");
const formDataRoute = require('./routes/form')
const app = express();
app.use(cors());
app.use(express.json())
app.use(express.urlencoded({
  extended: true
}));

mongoose.set("strictQuery", false);
mongoose
  .connect(process.env.MONGODB_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  },)
  .then(() => {
    console.log("db connection successfull");
  })
  .catch((err) => {
    console.log(err);
  });

app.get("/api/data", (req, res) => {
  res.send("successfull");
})

app.use("/api/form", formDataRoute);

app.listen(process.env.PORT || 8000, () => {
  console.log("server is running");
});
