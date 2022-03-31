import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import cors from 'cors';
import dotenv from 'dotenv';

import userRouter from "./routes/usersRouter.js";

const app = express();

app.use(bodyParser.json({ limit: "30mb", extended: true }))
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true }))
app.use(cors());

app.use('/users', userRouter);

app.get('/', (req, res) => {
    res.send('Hello to our API');
});

const PORT = process.env.PORT || 8000;

mongoose.connect('mongodb://rootuser:rootpass@localhost:27017/p2m?authSource=admin')
    .then(() => app.listen(PORT, () => console.log(`Server running on port ${PORT}`)))
    .catch((error) => console.log(error));