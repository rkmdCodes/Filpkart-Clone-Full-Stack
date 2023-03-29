import express from "express";
import bodyParser from "body-parser";
import dotenv from "dotenv";
import cors from "cors";
import Connection from "./database/db.js";
import DefaultData from "./default.js";
import Router from "./routes/route.js";


const app = express();

dotenv.config();
app.use(cors());

app.use(bodyParser.json({extended:true}));
app.use(bodyParser.urlencoded({extended:true}));
app.use("/", Router);

const PORT = 8000;
Connection(process.env.DB_USERNAME, process.env.DB_PASSWORD);
app.listen(PORT, () =>
  console.log(`Server started successfullt at PORT ${PORT}`)
);
DefaultData();
