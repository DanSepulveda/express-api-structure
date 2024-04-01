import nodemailer from 'nodemailer';
import { NODEMAILER_CREDENTIALS } from './constants';

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

console.log(transporter.verify());
export default transporter;
