import dotenv from "dotenv";
dotenv.config();

import express from "express";
import mongoose from "mongoose";

import { adminRouter } from "./routes/admin"

const app = express();
const PORT = process.env.PORT;
const MONGO_URL = process.env.MONGO_URL as string;

app.use(express.json());

app.use("/api/v1/admin" , adminRouter);

async function main() {
    await mongoose.connect(MONGO_URL);
    app.listen(PORT , () => {
        console.log(`BACKEND HOSTED ON PORT: ${PORT}`)
    })
    console.log("Database Connection Successfully Established!");
}
main();