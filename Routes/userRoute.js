const express = require("express");
const { addUser } = require("../Controller/userController");

const route = express.Router();

route.post("/api/post", addUser);

module.exports = route;
