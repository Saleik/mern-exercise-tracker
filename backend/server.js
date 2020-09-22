import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import exercisesRouter from "./routes/exercises"
import usersRouter from "./routes/users"
import connectDB from "./data/db"

dotenv.config({path:"./config/config.env"});

const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

connectDB();

app.use('/exercises', exercisesRouter);
app.use('/users', usersRouter);

app.listen(port, () => {
  console.log(`Server is running on port: ${port}`);
});
