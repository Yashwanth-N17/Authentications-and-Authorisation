const express = require("express");
const router = express.Router();


router.get("/home", (req, res)=>{
    res.send("Successfully route is working!");
})

module.exports = router;