const express = require("express");
const userModel = require("../Models/userModel");
const cron = require("node-cron");
const moment = require("moment");

exports.addUser = (req, res) => {
  const { userName, Email } = req.body;
  cron.schedule(
    "0 9 * * * *",
    () => {
      const Users = new userModel({
        userName,
        Email,
        dateTime: moment().format("DD/MM/YYYY h:mm:ss a")
      });
      Users.save().then(() => {
        console.log("cron job worked");
      });
    },
    { scheduled: true, timezone: "Asia/Kolkata" }
  );
  return res.status(200).json({
    message: "user data saved"
  });
};
