const express = require("express")
const router = express.Router()

router.get("/", (req, res)=>{
    res.json({mssg: "Get Request"})
})

router.post("/", async (req, res)=>{
    res.json({mssg: "Post Request for specific note"})
})

router.get("/:id", (req, res)=>{
    res.json({mssg: "Get Request for specific note"})
})

router.delete("/:id", (req, res)=>{
    res.json({mssg: "Delete Request for specific note"})
})

router.patch("/:id", (req, res)=>{
    res.json({mssg: "Update Request for specific note"})
})

module.exports = router
