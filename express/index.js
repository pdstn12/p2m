import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import cors from 'cors';
import dotenv from 'dotenv';
import fileUpload from 'express-fileupload';

import userRouter from "./routes/usersRouter.js";
import fileRouter from "./routes/filesRouter.js";

export const app = express();

app.use(fileUpload());

app.use(bodyParser.json({ limit: "30mb", extended: true }))
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true }))
app.use(cors());


app.use('/api', userRouter);
app.use('/api/file', fileRouter);

app.use(express.static('storage'))

app.get('/', (req, res) => {
    res.send('Hello to our API');
});

/* const PORT = process.env.PORT || 8000;

mongoose.connect('mongodb://rootuser:rootpass@mongodb:27017/p2m?authSource=admin')
    .then(() => app.listen(PORT, () => console.log(`Server running on port ${PORT}`)))
    .catch((error) => console.log(error)); */