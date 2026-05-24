import dotenv from 'dotenv';
dotenv.config();
import express from 'express';
import cors from 'cors';
import { connectCloudinary } from './config/cloudinary.js';
import userRoute from './routers/users.route.js';
import cropRouter from './routers/crop.route.js';
import mongodb from './config/db.js';
connectCloudinary();
const app = express();

app.use(cors());
app.use(express.json());

app.use(userRoute);
app.use(cropRouter);

mongodb();

const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
})