require("dotenv").config()

const express = require("express")

//create express app
const app = express()

//routes
app.get("/", (req, res)=>{
    res.json({mssg: "app running sucessfully"})
})

//listen for request
app.listen(process.env.PORT, ()=>{
    console.log("listening on port",process.env.PORT)
})