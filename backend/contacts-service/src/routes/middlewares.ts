import { Request, Response } from 'express';
import { contactSchema, contactUpdateSchema } from '../models/contactSchemas';
import commonsMiddlewawre from 'ms-commons/api/routes/middlewares';

function validateContactSchema(req: Request, res: Response, next: any) {
    return commonsMiddlewawre.validateSchema(contactSchema, req, res, next);
}

function validateUpdateContactSchema(req: Request, res: Response, next: any) {
    return commonsMiddlewawre.validateSchema(contactUpdateSchema, req, res, next);
}

export { validateContactSchema, validateUpdateContactSchema };