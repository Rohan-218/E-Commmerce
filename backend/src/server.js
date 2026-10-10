import express from 'express';
import cors from 'cors';
import 'dotenv/config';
import connectDB from './config/mongodb.js';
import connectCloudinary from './config/cloudinary.js';

// App config
const app = express();
const port = process.env.PORT || 3000;
connectDB();
connectCloudinary();

// middlewares
app.use(express.json());
app.use(cors());

// Api Endpoints
app.get('/', (req,res) => {
    res.send("API IS WORKING")
});

app.listen(port, () => {
    console.log("Server is running on port : "+ port);
});