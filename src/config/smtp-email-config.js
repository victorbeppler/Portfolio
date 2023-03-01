import nodemailer from "nodemailer";
import { config } from "dotenv";
config();
export const transporter = nodemailer.createTransport({
  host: "smtp.gmail.com",
  port: 465,
  secure: true,
  auth: {
    user: process.env.email,
    pass: process.env.passSecurity,
  },
});
