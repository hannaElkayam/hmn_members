const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cors());

const CONNECTION_URL =
"mongodb+srv://hanna:passwordhanna@cluster0.qzmyfno.mongodb.net/?retryWrites=true&w=majority";
mongoose
  .connect(CONNECTION_URL, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log("Connected to Database");
  })
  .catch((error) => {
    console.error("Error connecting to the database:", error);
  });

const userSchema = mongoose.Schema({
    firstName: String,
    lastName: String,
    userId: String,
    userCity: String,
    userStreet: String,
    userStreetNumber: Number,
    userDateOfBirth: Date,
    userPhone: String,
    userMobilePhone: String,
    userVaccinations : [] , 
    dateOfRecovery : Date , 
    dateOfOnsetOfIllness : Date , 
  });
  

  const User = mongoose.model("User", userSchema);



app.get("/", (req, res) => {
    res.send("express is here");
  });

app.post("/create", (req, res) => {
  console.log(req.body.userVaccinations);
  const newUser = new User({
    firstName: req.body.firstName,
    lastName: req.body.lastName,
    userId : req.body.userId,
    userCity : req.body.userCity,
    userStreet : req.body.userStreet,
    userStreetNumber : req.body.userStreetNumber,
    userDateOfBirth : req.body.userDateOfBirth,
    userPhone : req.body.userPhone,
    userMobilePhone : req.body.userMobilePhone,
    userVaccinations : req.body.userVaccinations,
    dateOfRecovery : req.body.dateOfRecovery , 
    dateOfOnsetOfIllness : req.body.dateOfOnsetOfIllness , 
  });
  newUser
    .save()
    .then((doc) => console.log(doc))
    .catch((err) => {
      console.error(err);
      res.status(500).send("Error saving user to database");
    });
});

app.get("/users", (req, res) => {
  User.find()
    .then((items) => res.json(items))
    .catch((err) => console.log(err));
});
  
  app.listen(3001, function () {
    console.log("Express server is running");
  });
