import express from 'express';
import helmet from 'helmet';
import cors from 'cors';
import 'dotenv/config';
import router from './routes';
import connectDB from '../config/database';
import { ACCEPTED_ORIGINS, ENDPOINT_BASE } from '../config/constants';

const app = express();
app.use(express.json());

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

app.use(helmet());
connectDB();

app.use(ENDPOINT_BASE, router);

export default app;
