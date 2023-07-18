// Hacke2Skill Youtube api assignment

const express = require('express')
const cors = require('cors')
const { connection } = require('./Config/db')
const { YtVideoRoute } = require('./Routes/YtVideosApi')
const { fetchCricketVideosData } = require('./CricketVideoData/CricketVideodata')
const app = express()

app.use(cors())
app.use(express.json())
fetchCricketVideosData()
app.get("/" , (req, res) => {
    res.send("Welcome to the Hacke2Skill")
})
// ytRoute
app.use("/api" , YtVideoRoute)



app.listen(process.env.port, () =>{
    try {
        connection
        console.log(`Connecting to ${process.env.port}`)
    } catch (error) {
        console.log(`Error while connecting to ${process.env.port}`, error)
    }
})