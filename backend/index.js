// index.js
import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import mongoose from "mongoose";
import contactRoute from "./routes/contact.js";

dotenv.config();
const app = express();

app.use(cors());
app.use(express.json());

mongoose
  .connect(process.env.MONGO_URI)
  .then(() => console.log("✅ MongoDB connected"))
  .catch((err) => console.error("❌ MongoDB connection error:", err));

app.use("/contact", contactRoute);

app.get("/", (req, res) => res.send("🚀 Portfolio backend running"));

app.listen(3000, () => console.log("✅ Server running on port 3000"));
