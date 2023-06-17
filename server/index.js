import express from "express";
import cors from "cors";
import mongoose from "mongoose";
import bodyParser from "body-parser";
import morgan from "morgan";
import helmet from "helmet";
import dotenv from "dotenv";


import authRoutes from "./routes/auth.js"
import userRoutes from "./routes/users.js"
import postRoutes from "./routes/posts.js"

const app = express()
app.use(express.json())
dotenv.config();
mongoose.connect((process.env.MONGODB_URL), {
    useNewUrlParser: true,
    useUnifiedTopology: true,

}).then(() => {
    console.log("Connected to MongoDB");
}).catch(error => {
    console.log(error.message);
});

app.use(bodyParser.json({ limit: "50mb" }));
app.use(helmet());
app.use(cors());
app.use(morgan("common"));

app.use("/api/auth", authRoutes)
// app.use("/api/users", userRoutes)
// app.use("/api/posts", postRoutes)
// app.get("/test", (req,res) =>{
//     res.json("IT WORK")
// })

app.listen(process.env.PORT || 8000, () => {
    console.log("Server is running...");
});