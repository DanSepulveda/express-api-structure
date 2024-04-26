import 'module-alias/register';
import express from 'express';
import cors from 'cors';
import helmet from 'helmet';
import passport from 'passport';
import compression from 'compression';
import cookieParser from 'cookie-parser';
import 'dotenv/config';
import '@config/transporter';
import router from '@routes/index';
import connectDB from '@config/database';
import jwtStrategy from '@config/passport';
import { ACCEPTED_ORIGINS, ENDPOINT_BASE } from '@config/app';
import errorHandler from '@api/middlewares/httpErrorHandler';

const app = express();

passport.use(jwtStrategy);
app.use(express.json());
app.use(helmet());
app.use(
  cors({
    origin(requestOrigin, callback) {
      const origin = requestOrigin ?? 'same origin';
      if (ACCEPTED_ORIGINS.includes(origin)) {
        callback(null, true);
      } else {
        callback(new Error('Not allowed by cors'));
      }
    },
    credentials: true
  })
);
app.use(cookieParser());
app.use(compression());
connectDB();
app.use(ENDPOINT_BASE, router);
app.use(errorHandler);

export default app;
