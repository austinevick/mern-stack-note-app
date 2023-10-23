import express from "express";
import router from "./controller/Note.js";
import mongoose from "mongoose";
import cors from 'cors';
import dotenv from 'dotenv';
dotenv.config();
const app = express();

app.use(cors());
app.use(express.json());
app.use(express.raw());
app.use(express.urlencoded({ extended: true }));
app.use('/api', router);


app.listen(3000, async () => {
    try {
        await mongoose.connect(process.env.MONGO_URI);
        console.log('connected');
    } catch (error) {
        console.log(error);
    }
    console.log('server is listening on port 3000');
});