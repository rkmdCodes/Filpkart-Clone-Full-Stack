import express  from "express";
import Connection from "./database/db.js";
import dotenv from "dotenv";
import DefaultData from "./default.js";

dotenv.config();

const app = express();

const PORT = 8000;
Connection(process.env.DB_USERNAME,process.env.DB_PASSWORD);
app.listen(PORT,()=>console.log(`Server started successfullt at PORT ${PORT}`));
DefaultData();
