import { Router } from 'express';
import accountsController from '../controllers/accounts'
import { validateAccountSchema, validateLoginSchema, validateUpdateAccountSchema } from './middlewares';
import middlewareCommons from 'ms-commons/api/routes/middlewares';

const router = Router();

router.get('/accounts/', middlewareCommons.validateAuth, accountsController.getAccounts);
router.get('/accounts/:id', middlewareCommons.validateAuth, accountsController.getAccount);
router.patch('/accounts/:id', middlewareCommons.validateAuth, validateUpdateAccountSchema, accountsController.setAccount);
router.post('/accounts/', validateAccountSchema, accountsController.addAccount);
router.post('/accounts/login', validateLoginSchema, accountsController.loginAccount);
router.post('/accounts/logout', accountsController.logoutAccount);

export default router;