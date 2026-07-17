import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors'
import connectDB from './config/db.js';
import authRoute from './routes/auth.routes.js'
import analysis from './routes/analysis.routes.js';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());

app.use(authRoute);
app.use(analysis);

connectDB();
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
})