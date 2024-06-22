import express from "express"
import mongoose from "mongoose"
import dotenv from "dotenv"
import userRoutes from "./routes/users.js"
import commentRoutes from "./routes/comments.js"
import videoRoutes from "./routes/videos.js"
import authRoutes from "./routes/auth.js"
import cookieParser from "cookie-parser"
import cors from 'cors'
dotenv.config()

const app= express()

const connect=()=>{
    mongoose.connect(process.env.MONGO_URI).then(()=>{
        console.log("Connected to DB")
    }).catch((err)=>{
        console.error("Error connecting to DB", err)
    })
}

const corsOptions = {
    origin: 'http://localhost:5173', // Set to your client's origin
    credentials: true, // To accept cookies/credentials
  };

app.use(cors(corsOptions));
app.use(cookieParser())
app.use(express.json())
app.use("/api/auth",authRoutes)
app.use("/api/users",userRoutes)
app.use("/api/videos",videoRoutes)
app.use("/api/comments",commentRoutes)

app.use((req, res, next) => {
    res.setHeader("Cross-Origin-Opener-Policy", "same-origin");
    next();
});

app.use((err,req,res,next)=>{
    const status=err.status || 500;
    const msg= err.message || "Something went wrong"
    return res.status(status).json({
        success:false,
        status:status,
        message:msg
    })
})

app.listen(3000,()=>{
    connect()
    console.log("Server started")
})