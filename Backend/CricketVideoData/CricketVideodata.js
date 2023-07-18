// saving fetched data from youtube to the mongodb atlas

const { YtVideoModel } = require("../Model/YTVideoModel");
const  axios  = require("axios")
require("dotenv").config()
async function fetchCricketVideosData() {
    try {
      const response = await axios.get('https://www.googleapis.com/youtube/v3/search', {
        params: {
          part: 'snippet',
          q: 'cricket', 
          type: 'video',
          maxResults: 15, 
          key: process.env.YouTubeapi, 
        },
      });
  
      const videosdata = response.data.items.map((item) => {
        return {
          title: item.snippet.title,
          description: item.snippet.description,
          publishTime: item.snippet.publishTime,
          thumbnail: item.snippet.thumbnails.medium.url,
          // Map other required fields from the response
        };
      });
  
      // Save videos to the database
      await YtVideoModel.insertMany(videosdata);
            // console.log(videosdata);
    } catch (error) {
      console.error('Error fetching videos from YouTube:', error);
    }
  }

  
  setInterval(fetchCricketVideosData, 10000);

    module.exports = {
        fetchCricketVideosData
    }