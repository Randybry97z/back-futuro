import {Router} from 'express';
const dashboardRoutes = Router();

import * as controller from '../controllers/dashboard.controller';

dashboardRoutes.post('/linechart', controller.generateLineDashboard);

export const PREFIX = '/dashboard';
export const ROUTER = dashboardRoutes;