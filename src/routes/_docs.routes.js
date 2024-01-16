import { Router } from "express";
const docsRoutes = Router();

import * as controller from "../controllers/_docs.controller";

docsRoutes.get('/generate/pdf/target/:item', controller.getPDFTargetById);
docsRoutes.get('/generate/pdf/participante/:participanteId', controller.getPDFParticipante);

export const PREFIX = "/docs";
export const ROUTER = docsRoutes;