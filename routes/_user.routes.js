import {Router} from 'express';
const userRoutes = Router();
import { verifyToken, existEmail } from '../middlewares';

import * as controller from '../controllers/user.controller';

userRoutes.get('/', controller.getUsers);
userRoutes.post('/', [existEmail], controller.createUser);
userRoutes.get('/:id', [verifyToken], controller.getUser);
userRoutes.put('/:id', [verifyToken], controller.updateUser);
userRoutes.put('/forgotPassword/:email', controller.updatePasswordForgotten);
userRoutes.delete('/:id', [verifyToken], controller.deleteUser);

export const PREFIX = '/user';
export const ROUTER = userRoutes;