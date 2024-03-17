import mongoose from 'mongoose';
import { MONGO_URI } from './constants';

const connectDB = (): void => {
  mongoose
    .connect(MONGO_URI)
    .then(() => {
      console.log('Database connected');
    })
    .catch((error) => {
      let message = 'Unkown error';
      if (error instanceof Error) {
        message = error.message;
      } else if (typeof error === 'string') {
        message = error;
      }
      console.log('DB connection error: ' + message);
    });
};

export default connectDB;
