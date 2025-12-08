const mongoose = require("mongoose");
require("dotenv").config();

const db_url = process.env.MONGO_URL;
mongoose.connect(db_url)
.then(()=>{
    console.log("MongoDB is connected successfully...........");
})
.catch((err)=> {
    console.log("Failed to connect MongoDB ", err);
})