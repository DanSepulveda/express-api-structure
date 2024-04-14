import { Router } from 'express';
import swaggerUI from 'swagger-ui-express';
import { specs } from '../../config/swagger';

const swaggerRouter = Router();

swaggerRouter.use('/', swaggerUI.serve);
swaggerRouter.get('/', swaggerUI.setup(specs, { explorer: true }));

export default swaggerRouter;
