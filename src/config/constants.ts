export const PORT = process.env.PORT ?? 4000;
export const MONGO_URI = process.env.MONGO_URI ?? '';
export const SECRET_OR_KEY = process.env.SECRET_OR_KEY ?? '';
export const ENDPOINT_BASE = '/api/v1';
export const NODEMAILER_CREDENTIALS = {
  user: process.env.MAILER_USER,
  pass: process.env.MAILER_PASS
};
export const ACCEPTED_ORIGINS = ['same origin', 'http://localhost:5173'];
