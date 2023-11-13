import { Router } from "express";
const emailRoutes = Router();
import { verifyToken } from "../middlewares";

import * as controller from "../controllers/_email.controller";

emailRoutes.post("/", controller.createMail);
emailRoutes.post("/approvedUser", [verifyToken], controller.approveUserEmail);
emailRoutes.get("/verifyEmail/:userId/:uniqueString", controller.verifyEmail );
emailRoutes.get("/verifyEmailToDelete/:userId/:uniqueString", controller.verifyToDeletedEmail );
emailRoutes.get("/verifyEmail", controller.verifyEmailPage);
emailRoutes.get("/verifyDeleteEmail", controller.verifyEmailDeletePage);
emailRoutes.get("/forgotPswEmail/:userId/:passwordGenerated", controller.updateToForgotPsw);

export const PREFIX = "/email";
export const ROUTER = emailRoutes;

