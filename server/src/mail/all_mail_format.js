import nodemailer from "nodemailer";
import dotenv from "dotenv"


dotenv.config()

// / Create a transporter using SMTP
const transporter = nodemailer.createTransport({
  host: "smtp.@gmail.com",
  port: 465,
  secure: false, // use STARTTLS (upgrade connection to TLS after connecting)
  auth: {
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASS,
  },
});


export const user_otp_verification=async(name, email ,otp)=>{
   try {
  const info = await transporter.sendMail({
    from: process.env.SMTP_USER, // sender address
    to: email, // list of recipients
    subject: "Hello", // subject line
    text: "Hello world?", // plain text body
    html: "<b>Hello world?</b>", // HTML body
  });

  console.log("Message sent: %s", info.messageId);
  // Preview URL is only available when using an Ethereal test account
  console.log("Preview URL: %s", nodemailer.getTestMessageUrl(info));
}  catch(err){
        console.log(err.message)
    }
}

export const admin_login_otp_verification=async(name, email ,otp)=>{
   try {
  const info = await transporter.sendMail({
    from: process.env.SMTP_USER, // sender address
    to: email, // list of recipients
    subject: "Hello", // subject line
    text: "Hello world?", // plain text body
    html: "<b>Hello world?</b>", // HTML body
  });

  console.log("Message sent: %s", info.messageId);
  // Preview URL is only available when using an Ethereal test account
  console.log("Preview URL: %s", nodemailer.getTestMessageUrl(info));
}  catch(err){
        console.log(err.message)
    }
}

export const user_login_detect=async(name, email )=>{
    try{

    }
    catch(err){
        console.log(err.message)
    }
}

export const user_detect_account=async(name, email )=>{
    try{

    }
    catch(err){
        console.log(err.message)
    }
}