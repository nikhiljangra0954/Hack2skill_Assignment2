// 

const express = require('express');
const { YtVideoModel } = require('../Model/YTVideoModel');
const YtVideoRoute = express.Router();


YtVideoRoute.get("/", async (req, res) => {
    res.send("Yt Route working")
})

// store the retrive data to cricket videos to the database




  module.exports = {
    YtVideoRoute
  }