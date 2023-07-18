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

// indexing the publish time and title for better retrival of data from mongobd
YtVideoSchema.index({ publishTime: -1 }); 
YtVideoSchema.index({ title: 'text', description: 'text' }); 

const YtVideoModel = mongoose.model("YtVideosData" , YtVideoSchema)

module.exports = {
    YtVideoModel
}