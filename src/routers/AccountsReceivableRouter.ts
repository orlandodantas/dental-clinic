import { Router } from 'express';
import { AccountsReceivableFactory } from '../factories';
import { AccountsReceivableValidate, Authorization, Pagination } from '../middleware';

export default class AccountsReceivableRouter {
  public route: Router;

  constructor() {
    this.route = Router();

    this.router();
  }

  private router(): void {
    const accountsReceivableController = AccountsReceivableFactory.create();

    this.route
      .get('/', Authorization.authenticate, Pagination.create, accountsReceivableController.getAll)
      .get('/:id', Authorization.authenticate, accountsReceivableController.getById)
      .post(
        '/received',
        Authorization.authenticate,
        AccountsReceivableValidate.verifyReceivables,
        accountsReceivableController.getByReceived,
      )
      .post(
        '/receive',
        Authorization.authenticate,
        AccountsReceivableValidate.verifyReceivables,
        accountsReceivableController.getByReceive,
      )
      .patch(
        '/receive/:id',
        Authorization.authenticate,
        AccountsReceivableValidate.verify,
        accountsReceivableController.patchReceive,
      );
  }
}
