import express from "express";
import dotenv from 'dotenv'
dotenv.config();
const port = process.env.PORT || 3000;

const app = express();

app.get("/", (req, res) => res.send("Server is ready"));

app.listen(port, () => console.log(`Server is running on port ${port}`));
