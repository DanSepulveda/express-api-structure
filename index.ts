import app from './src/configs/serverConfig';
import { PORT } from './src/configs/constants';

app.listen(PORT, () => {
  console.log('Server listening on port: ' + PORT);
});
