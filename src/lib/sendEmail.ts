// lib/sendEmail.ts
import nodemailer from 'nodemailer';
import { EMAIL_PASS, EMAIL_USER } from './constants';
import { EmailRequestBody } from './types';

export async function sendEmail(to: string, subject: string, html: string | null, data?: EmailRequestBody) {
  const transporter = nodemailer.createTransport({
    service: 'Gmail',
    auth: {
      user: EMAIL_USER,
      pass: EMAIL_PASS,
    },
  });

  let textBody: string = '';

  if (data) {
    delete data?.subject;
    delete data?.email;
    textBody = Object.entries(data)
      .map(([key, value]) => `${key}: ${value}`)
      .join('\n');
  }

  const Content = `${html} \n ${textBody}` 
  const mailOptions = {
    from: `"Fit Mafia" <${process.env.EMAIL_USER}>`,
    to,
    subject,
    Content
  };

  const info = await transporter.sendMail(mailOptions);
  console.log('Email sent: ', info.response);
  return info;
}
