import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import cors from "cors";
import roomRoutes from "./routes/room.routes.js";

dotenv.config();

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Routes
app.use("/api/rooms", roomRoutes);

// Root route
app.get("/", (req, res) => {
    res.send("Room Booking Backend is running!");
});

// MongoDB connection (latest Mongoose)
mongoose.connect(process.env.MONGO_URL)
    .then(() => {
        console.log("MongoDB connected successfully");
        app.listen(process.env.PORT, () =>
            console.log(`Server running on http://localhost:${process.env.PORT}`)
        );
    })
    .catch((err) => console.log(err));