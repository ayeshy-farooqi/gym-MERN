import connectToMongoDb from "./config/db.js";
import dotenv from "dotenv";
import cors from "cors";
import express from "express";
import userroutes from "../backend/routes/userroute.js";



dotenv.config();
const app = express();
const PORT = process.env.PORT || 5000;

app.use(express.json());
app.use(cors());


connectToMongoDb();
console.log ("application started")

app.get("/", (req, res)=> res.send("server is running"))

app.use("/api/user",userroutes);


app.listen(PORT,()=> 
console.log(`server is running on port ${PORT}`)
);

