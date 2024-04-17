import nodemailer from 'nodemailer';
import { NODEMAILER_CREDENTIALS } from './app';

const { user, pass } = NODEMAILER_CREDENTIALS;

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

transporter
  .verify()
  .then(() => {
    console.log('Connected to email service');
  })
  .catch(() => {
    console.log('Email service connection failed.');
  });

export default transporter;
