import { Request, Response } from 'express';
import { accountSchema, loginSchema, accountUpdateSchema } from '../models/accountSchemas';
import commonsMiddlewawre from 'ms-commons/api/routes/middlewares';

function validateAccountSchema(req: Request, res: Response, next: any) {
    return commonsMiddlewawre.validateSchema(accountSchema, req, res, next);
}

function validateUpdateAccountSchema(req: Request, res: Response, next: any) {
    return commonsMiddlewawre.validateSchema(accountUpdateSchema, req, res, next);
}

function validateLoginSchema(req: Request, res: Response, next: any) {
    return commonsMiddlewawre.validateSchema(loginSchema, req, res, next);
}

async function validateAuth(req: Request, res: Response, next: any) {
    return commonsMiddlewawre.validateAuth(req, res, next);
}

export { validateAccountSchema, validateLoginSchema, validateUpdateAccountSchema, validateAuth };