import {Router} from 'express';
const entityRoutes = Router();
import { verifyToken } from '../middlewares';

import * as controller from '../controllers/entity.controller';

entityRoutes.get('/', [verifyToken], controller.getEntities);
entityRoutes.post('/', [verifyToken], controller.createEntity);
entityRoutes.get('/:id', [verifyToken], controller.getEntity);
entityRoutes.put('/:id', [verifyToken], controller.updateEntity);
entityRoutes.patch('/:id', [verifyToken], controller.patchEntity);
entityRoutes.delete('/:id', [verifyToken], controller.deleteEntity);

export const PREFIX = '/entity';
export const ROUTER = entityRoutes;
