import express from 'express';
import dotenv from 'dotenv';
dotenv.config();
import { notFound, errorHandler } from './middleware/error.middleware.js';
import userRoutes from "./routes/user.routes.js"

const port = process.env.PORT || 5000;

const app = express();

app.use("/api/users", userRoutes);
app.get("/", (req, res) => {
    res.send("Welcome");
})

app.use(notFound);
app.use(errorHandler);

app.listen(port, () => console.log('listening on port ' + port));