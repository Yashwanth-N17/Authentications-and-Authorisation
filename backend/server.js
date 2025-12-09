require("dotenv").config();

const express = require("express");
const cors = require("cors");
const authRoute = require("./Routes/authRoute");
const app = express();
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended:true}));

const PORT = process.env.PORT || 3000;

app.use("/auth", authRoute);

app.listen(PORT, (req, res)=>{
    console.log(`Listening to the port ${PORT}`)
})


//    auth/siignup