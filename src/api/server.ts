import express from 'express';
import helmet from 'helmet';
import cors from 'cors';
import 'dotenv/config';
import router from './routes';
import connectDB from '@config/database';
import { ENDPOINT_BASE } from '@config/constants';

const app = express();
app.use(express.json());
// TODO: configure cors
app.use(cors());
app.use(helmet());
connectDB();

app.use(ENDPOINT_BASE, router);

export default app;
