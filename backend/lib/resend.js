// lib/resend.js
import { Resend } from "resend";
import path from "path";
import dotenv from "dotenv";

dotenv.config();

export const resend = new Resend(process.env.RESEND_API_KEY);
