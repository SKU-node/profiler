import express from "express";
import { config } from "dotenv";
import bodyParser from "body-parser";
import router from "./app.js";
import { bulk } from "./models/index.js";
import cors from "cors";

config();
const app = express();
const port = process.env.PORT; // backend port number
app.use(cors());
app.use(bodyParser.json());

await bulk(); // db bulking

app.use("/api", router); // route 연결
app.listen(port, () => console.log("Welcome to nodeJS")); // port 설정
