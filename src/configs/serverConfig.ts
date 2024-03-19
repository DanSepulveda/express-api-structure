import express from 'express';
import cors from 'cors';
import 'dotenv/config';
import router from '../routes';
import connectDB from './dbConfig';
import helmet from 'helmet';

const app = express();
app.use(express.json());
// TODO: configure cors
app.use(cors());
app.use(helmet());
connectDB();

app.use('/api/v1', router);

export default app;
