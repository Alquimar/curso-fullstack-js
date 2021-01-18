import { Request, Response } from 'express';
import { messageSchema, messageUpdateSchema } from '../models/messageSchemas';
import commonsMiddlewawre from 'ms-commons/api/routes/middlewares';

function validateMessageSchema(req: Request, res: Response, next: any) {
    return commonsMiddlewawre.validateSchema(messageSchema, req, res, next);
}

function validateUpdateMessageSchema(req: Request, res: Response, next: any) {
    return commonsMiddlewawre.validateSchema(messageUpdateSchema, req, res, next);
}

export { validateMessageSchema, validateUpdateMessageSchema };