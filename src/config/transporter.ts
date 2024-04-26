import nodemailer from 'nodemailer';
import { ENVIRONMENT, NODEMAILER } from './app';

const { user, pass } = NODEMAILER.credentials;

const transporter = nodemailer.createTransport({
  service: 'Gmail',
  host: 'smtp.gmail.com',
  port: 465,
  secure: true,
  auth: {
    user,
    pass
  },
  tls: { rejectUnauthorized: false }
});

if (ENVIRONMENT === 'dev') {
  transporter
    .verify()
    .then(() => {
      console.log('Connected to email service');
    })
    .catch(() => {
      console.log('Email service connection failed.');
    });
}

export default transporter;
