import mongoose from 'mongoose';
import handleError from '@utils/handleError';
import { MONGO_URI } from './constants';

const connectDB = (): void => {
  mongoose
    .connect(MONGO_URI)
    .then(() => {
      console.log('Database connected');
    })
    .catch((error) => {
      const message = handleError(error);
      console.log('DB connection error: ' + message);
    });
};

export default connectDB;
