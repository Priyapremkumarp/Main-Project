const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

const app = express();

mongoose.connect("mongodb+srv://your_username:your_password@cluster0.nc42nci.mongodb.net/Website-Doc?retryWrites=true&w=majority")
  .then(() => {
    console.log("db connected");
  })
  .catch((err) => {
    console.log(err);
  });

var adminSchema = mongoose.Schema;
var adminSchema = new adminSchema({
  firstName: String,
  lastName: String,
  phoneNumber: Number,
  address: String,
  specialization: String,
  experience: String,
  feePerConsultation: Number
});

let adminModel = mongoose.model("adminprofile", adminSchema);
module.exports = adminModel;