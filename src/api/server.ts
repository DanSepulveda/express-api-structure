import 'module-alias/register';
import express from 'express';
import helmet from 'helmet';
import cors from 'cors';
import 'dotenv/config';
import '@config/transporter';
import router from '@routes/index';
import connectDB from '@config/database';
import { ACCEPTED_ORIGINS, ENDPOINT_BASE } from '@config/app';
import errorHandler from '@middlewares/errorHandler';
import passport from 'passport';
import jwtStrategy from '@config/passport';

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
    }
  })
);
connectDB();
app.use(ENDPOINT_BASE, router);
app.use(errorHandler);

export default app;
