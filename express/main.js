import { app } from "./index.js";
import mongoose from "mongoose";

const PORT = process.env.PORT || 8000;

mongoose.connect('mongodb://rootuser:rootpass@mongodb:27017/p2m?authSource=admin')
    .then(() => app.listen(PORT, () => console.log(`Server running on port ${PORT}`)))
    .catch((error) => console.log(error));