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
import { Post } from "./model/Post.js";
import { Category } from "./model/Category.js";
import { User } from "./model/User.js";

const app = express()
app.use(express.json())
dotenv.config();
mongoose.connect((process.env.MONGODB_URL), {
    useNewUrlParser: true,
    useUnifiedTopology: true,

}).then(() => {
    console.log("Connected to MongoDB");
    createAndSavePost();
}).catch(error => {
    console.log(error.message);
});


// test data 
async function createAndSavePost() {
    try {
      const user = await User.findById("648d3189eaafaef8122a42e0"); // Replace with the actual _id of the user
      const category = "Food"; // Replace with the desired category string value
    
      const newPost = new Post({
        title: "The Food with delicious ",
        desc: "This is a sample post",
        photo: "https://images.pexels.com/photos/7008010/pexels-photo-7008010.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
        createdBy: user,
        category: category,
      });
    
      const savedPost = await newPost.save();
    
      console.log("New post saved:", savedPost);
    } catch (error) {
      console.log("Error saving post:", error);
    }
  }
  


app.use(bodyParser.json({ limit: "50mb" }));
app.use(helmet());
app.use(cors());
app.use(morgan("common"));

app.use("/api/auth", authRoutes)
// app.use("/api/users", userRoutes)
app.use("/api/posts", postRoutes)
// app.get("/test", (req,res) =>{
//     res.json("IT WORK")
// })

app.listen(process.env.PORT || 8000, () => {
    console.log("Server is running...");
});


