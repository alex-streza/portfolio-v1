import type { NextApiRequest, NextApiResponse } from "next";

require("dotenv").config();
const nodemailer = require("nodemailer");

export default function (req: NextApiRequest, res: NextApiResponse) {
  console.log("Received request");
  const { name, email, message } = req.body;

  if (
    name == null ||
    name.length == 0 ||
    email == null ||
    email.length == 0 ||
    message == null ||
    message.length == 0
  ) {
    res.status(422).end;
  }

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
    subject: `Message From ${name} - Email ${email}`,
    text: message,
    html: `<div>${message}</div>`,
  };

  transporter.sendMail(mailData, function (err: any, info: any) {
    if (err) console.log(err);
    else console.log(info);
  });
  res.status(200).end("Email sent successfully!");
}
