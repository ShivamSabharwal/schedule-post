// const schedule = require("node-schedule");
import schedule from "node-schedule";
// const express = require("express");
import express from "express";
// const bodyParser = require("body-parser");
import bodyParser from "body-parser";
// const mongoose = require("mongoose");
import mongoose from "mongoose";

import { v4 as uuidv4 } from "uuid";
import { months } from "./module.js";
import { Person } from "./schema.js";
import path from "path";

const __dirname = path.resolve();
const app = express();

app.use(bodyParser.urlencoded({ extended: true }));

mongoose.connect("mongodb://localhost:27017/testDB");

let task = [];

app.get("/", function (_, res) {
  res.sendFile(__dirname + "/index.html");
});

app.post("/", function (req, res) {
  // console.log(req.body);
  const { schedulDate, schedulTime, personName } = req.body;
  const reqObj = new Date(schedulDate);
  const reqDate = reqObj.getDate();
  const reqMonthNum = reqObj.getMonth();
  const reqMonth = months[reqMonthNum + 1];
  const reqYear = reqObj.getFullYear();
  const reqTime = schedulTime;

  const dateStr = `${reqMonth} ${reqDate}, ${reqYear} ${reqTime}:00`;
  const userId = uuidv4();
  const post = new Person({
    name: personName,
    nameId: userId,
  });
  post.save();

  task.push(
    schedule.scheduleJob(dateStr, () => {
      console.log("@", new Date().toString);
      Person.find({ nameId: userId }, (err, data) => {
        if (err) {
          console.log(err);
        } else {
          console.log(data);
          Person.findOneAndDelete({ nameId: userId }, (err, data) => {
            if (err) {
              console.log(err);
            } else {
              console.log("data deleted");
            }
          });
        }
      });
    })
  );

  res.redirect("/");
});

app.listen(8080, () => {
  console.log("Server started on port 8080");
});
