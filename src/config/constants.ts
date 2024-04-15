export const PORT = process.env.PORT ?? 4000;
export const MONGO_URI = process.env.MONGO_URI ?? '';
export const ENDPOINT_BASE = '/api/v1';
export const NODEMAILER_CREDENTIALS = {
  user: process.env.MAILER_USER,
  pass: process.env.MAILER_PASS
};
export const ACCEPTED_ORIGINS = ['same origin', 'http://localhost:5173'];
export const JWT = {
  secret: process.env.JWT_SECRET ?? '',
  expiration: {
    auth: '1h',
    refresh: '1d',
    recovery: '1d',
    activation: 1
  }
};

export const CLIENT_URL = {
  verification: 'http://localhost:5173/verificar',
  recovery: 'http://localhost:5173/recuperar-contrasena'
};
