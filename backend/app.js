import express, { urlencoded } from "express";
import cors from "cors";
import dotenv from "dotenv";
dotenv.config({ path: "./config/config.env"});
import { dbConnection } from "./database/dbConnection.js";
import { errorMiddleware } from "./error/error.js";
import reservationRouter from "./routes/reservationRoute.js";
const app = express();

//connect backend to frontend
app.use(cors({
    origin:process.env.FRONTEND_URL,
    methods :["GET", "POST", "PUT", "DELETE", "OPTIONS"],
    credentials:true,
}));

app.use(express.json()); //converts string to object
app.use(express.urlencoded({ extended : true}));

app.use("/api/v1/reservation",reservationRouter);


dbConnection();

app.use(errorMiddleware);
export default app;