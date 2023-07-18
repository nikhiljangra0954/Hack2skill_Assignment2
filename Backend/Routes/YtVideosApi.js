// 

const express = require('express');
const { YtVideoModel } = require('../Model/YTVideoModel');
const YtVideoRoute = express.Router();
require("dotenv").config()

YtVideoRoute.get("/", async (req, res) => {
    res.send("Yt Route working")
})





  module.exports = {
    YtVideoRoute
  }