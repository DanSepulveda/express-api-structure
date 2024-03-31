import express from 'express';
import helmet from 'helmet';
import cors from 'cors';
import 'dotenv/config';
import router from './routes';
import connectDB from '../config/database';
import { ACCEPTED_ORIGINS, ENDPOINT_BASE } from '../config/constants';
import { errorHandler } from './middlewares/errorHandler';

const app = express();

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
