import express from 'express';
import cors from 'cors';
import 'dotenv/config';
import router from '../routes';
import connectDB from './dbConfig';

const app = express();
app.use(express.json());
app.use(cors());
connectDB();

app.use('/api', router);

export default app;
