import { Router } from 'express';
import middlewareCommons from "ms-commons/api/routes/middlewares";
// import  { validateMessageSchema, validateUpdateMessageSchema } from './middlewares';
import controller from '../controllers/messages';

const router = Router();

router.get('/messages/', middlewareCommons.validateAuth, controller.getMessages);

export default router;