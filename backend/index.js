import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import mongoose from "mongoose";
import cookieParser from "cookie-parser";
import path from "path";
import contactRoute from "./routes/contact.js";

dotenv.config();
const app = express();
const __dirname = path.resolve();

// Middleware
app.use(cors());
app.use(express.json());
app.use(cookieParser());

// MongoDB connection
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => console.log("✅ MongoDB connected"))
  .catch((err) => console.error("❌ MongoDB error:", err));

// API route
app.use("/contact", contactRoute);

// Serve React build files
app.use(express.static(path.join(__dirname, "../frontend/dist")));

app.get(/.*/, (req, res) => {
  res.sendFile(path.join(__dirname, "../frontend/dist/index.html"));
});

// Port
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`✅ Server running on port ${PORT}`));
