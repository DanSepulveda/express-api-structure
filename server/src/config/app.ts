export const PORT = process.env.PORT ?? 4000;
export const ENVIRONMENT = process.env.NODE_ENV ?? 'production';
export const MONGO_URI = process.env.MONGO_URI ?? '';
export const ACCEPTED_ORIGINS = ['same origin', 'http://localhost:5173'];

export const APP_NAME = 'App name';
export const ENDPOINT_BASE = '/api/v1';

const CLIENT_BASE_URL = 'http://localhost:5173';
export const CLIENT_URL = {
  verification: '/verify-account',
  recovery: '/recovery-password'
};

Object.keys(CLIENT_URL).forEach((key) => {
  CLIENT_URL[key as keyof typeof CLIENT_URL] =
    CLIENT_BASE_URL + CLIENT_URL[key as keyof typeof CLIENT_URL];
});

export const NODEMAILER = {
  displayedName: APP_NAME,
  credentials: {
    user: process.env.MAILER_USER,
    pass: process.env.MAILER_PASS
  }
};

export const JWT = {
  secret: process.env.JWT_SECRET ?? '',
  expiration: {
    activation: '12h',
    access: '1h',
    refresh: '3d',
    reset: '1d'
  }
};
