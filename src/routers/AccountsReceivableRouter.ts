import { Router } from 'express';
import { AccountsReceivableFactory } from '../factories';
import { AccountsReceivableValidate, Pagination } from '../middleware';

export default class AccountsReceivableRouter {
  public route: Router;

  constructor() {
    this.route = Router();

    this.router();
  }

  private router(): void {
    const accountsReceivableController = AccountsReceivableFactory.create();

    this.route
      .get('/', Pagination.create, accountsReceivableController.getAll)
      .get('/:id', accountsReceivableController.getById)
      .patch(
        '/receive/:id',
        AccountsReceivableValidate.verify,
        accountsReceivableController.patchReceive,
      );
  }
}
