import { Router } from 'express';
const authRoutes = Router();

import * as controller from '../controllers/_auth.controller';

authRoutes.post('/login', controller.login);
authRoutes.get('/check-token', controller.checkToken);

export const PREFIX = '/auth';
export const ROUTER = authRoutes;