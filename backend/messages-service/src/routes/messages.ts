import { Router } from 'express';
import middlewareCommons from "ms-commons/api/routes/middlewares";
import  { validateMessageSchema, validateUpdateMessageSchema } from './middlewares';
import controller from '../controllers/messages';

const router = Router();

router.get('/messages/:id', middlewareCommons.validateAuth, controller.getMessage);
router.get('/messages/', middlewareCommons.validateAuth, controller.getMessages);
router.post('/messages/', middlewareCommons.validateAuth, validateMessageSchema, controller.addMessage);
router.patch('/messages/:id', middlewareCommons.validateAuth, validateUpdateMessageSchema, controller.setMessage);
router.delete('/messages/:id', middlewareCommons.validateAuth, controller.deleteMessage);

export default router;