import {Router} from 'express';
const roleRoutes = Router();
import { verifyToken } from '../middlewares';

import * as controller from '../controllers/role.controller';

roleRoutes.get('/', [verifyToken], controller.getRoles);
roleRoutes.post('/', [verifyToken], controller.createRole);
roleRoutes.get('/:id', [verifyToken], controller.getRole);
roleRoutes.put('/:id', [verifyToken], controller.updateRole);
roleRoutes.delete('/:id', [verifyToken], controller.deleteRole);

export const PREFIX = '/role';
export const ROUTER = roleRoutes;