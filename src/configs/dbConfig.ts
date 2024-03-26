import mongoose from 'mongoose';
import { MONGO_URI } from './constants';
import { getErrorMessage } from '../utils';

const connectDB = (): void => {
  mongoose
    .connect(MONGO_URI)
    .then(() => {
      console.log('Database connected');
    })
    .catch((error) => {
      const message = getErrorMessage(error);
      console.log('DB connection error: ' + message);
    });
};

export default connectDB;
