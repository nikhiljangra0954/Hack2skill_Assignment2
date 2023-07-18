// 

const express = require('express');
const { YtVideoModel } = require('../Model/YTVideoModel');
const YtVideoRoute = express.Router();
require("dotenv").config()

YtVideoRoute.get("/", async (req, res) => {
    res.send("Yt Route working")
})

// store the retrive data to cricket videos to the database according to the new Videos
YtVideoRoute.get('/cricketVideo', async (req, res) => {
  try {
    const { page = 1, limit = 10 } = req.query;
    const skip = (page - 1) * limit;

    const videosData = await YtVideoModel.find()
      .sort({ publishTime: -1 })
      .skip(skip)
      .limit(Number(limit));

    res.status(200).json(videosData);
  } catch (error) {
    console.error('Error fetching videos:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});
// now search for cricket Videos with title and description
YtVideoRoute.get('/search', async (req, res) => {
  try {
    const {q, page = 1, limit = 10 } = req.query;
    const skip = (page - 1) * limit;

    const videosData = await YtVideoModel.find({
      $or: [
        { title: { $regex: q, $options: 'i' } },
        { description: { $regex: q, $options: 'i' } },
      ],
    })
      .sort({ publishTime: -1 })
      .skip(skip)
      .limit(Number(limit));

    res.status(200).json(videosData);
  } catch (error) {
    console.error('Error fetching videos:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});


  module.exports = {
    YtVideoRoute
  }