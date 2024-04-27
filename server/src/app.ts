import app from './api/server';
import { PORT } from './config/app';

app.listen(PORT, () => {
  console.log('Server listening on port: ' + PORT);
});
