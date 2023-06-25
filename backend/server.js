import express from 'express';
import dotenv from 'dotenv';
dotenv.config();
import cookieParser from 'cookie-parser';
import { notFound, errorHandler } from './middleware/error.middleware.js';
import connectDB from './config/db.js';
import userRoutes from "./routes/user.routes.js"


const port = process.env.PORT || 5000;

connectDB();
const app = express();
app.use(express.json());
app.use(express.urlencoded({extended: true}));

app.use(cookieParser());

app.use("/api/users", userRoutes);
app.get("/", (req, res) => {
    res.send("Welcome");
})

app.use(notFound);
app.use(errorHandler);

app.listen(port, () => console.log('listening on port ' + port));