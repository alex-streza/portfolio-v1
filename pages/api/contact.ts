import type { NextApiRequest, NextApiResponse } from "next";

require("dotenv").config();
const nodemailer = require("nodemailer");

export default function (req: NextApiRequest, res: NextApiResponse) {
  console.log("Received request");
  const transporter = nodemailer.createTransport({
    port: 465,
    host: "smtp.gmail.com",
    auth: {
      user: "portofolio.contact@gmail.com",
      pass: process.env.password,
    },
    secure: true,
  });
  const mailData = {
    from: "portofolio.contact@gmail.com",
    to: process.env.email,
    subject: `Message From ${req.body.name}`,
    text: req.body.message,
    html: `<div>${req.body.message}</div>`,
  };

  transporter.sendMail(mailData, function (err: any, info: any) {
    if (err) console.log(err);
    else console.log(info);
  });
  res.status(200);
}
