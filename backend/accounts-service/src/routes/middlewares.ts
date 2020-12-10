import { Request, Response } from 'express';
import { accountSchema, loginSchema, accountUpdateSchema } from '../models/accountSchemas';
import middlewareCommons from 'ms-commons/api/routes/middlewares';

function validateAccountSchema(req: Request, res: Response, next: any) {
    return middlewareCommons.validateSchema(accountSchema, req, res, next);
}

function validateUpdateAccountSchema(req: Request, res: Response, next: any) {
    return middlewareCommons.validateSchema(accountUpdateSchema, req, res, next);
}

function validateLoginSchema(req: Request, res: Response, next: any) {
    return middlewareCommons.validateSchema(loginSchema, req, res, next);
}

export { validateAccountSchema, validateLoginSchema, validateUpdateAccountSchema };