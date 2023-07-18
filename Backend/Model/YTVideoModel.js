// Yt Videos model

const mongoose = require('mongoose')

const YtVideoSchema = new mongoose.Schema({
    title: { type: String, required: true },
    description: { type: String },
    publishTime: { type: Date ,required: true},
    thumbnail: { type: String , required : true },
},{
    versionKey : false
})


const YtVideoModel = mongoose.model("YtVideosData" , YtVideoSchema)

module.exports = {
    YtVideoModel
}