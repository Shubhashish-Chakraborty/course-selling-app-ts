import dotenv from "dotenv";
dotenv.config();

import express from "express";

const app = express();
const PORT = process.env.PORT;

app.get('/' , (req , res) => {
    res.json({
        message: "BACKEND RUNNING PERFECT!!, WILL CREATE A COURSE SELLING APP!"
    })
})


app.listen(PORT , () => {
    console.log(`BACKEND HOSTED ON PORT: ${PORT}`)
})