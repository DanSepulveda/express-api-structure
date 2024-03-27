import app from '@api/server';
import { PORT } from '@config/constants';

app.listen(PORT, () => {
  console.log('Server listening on port: ' + PORT);
});
