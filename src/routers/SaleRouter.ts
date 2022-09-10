import { Router } from 'express';
import { SaleFactory } from '../factories';
import { Authorization, Pagination, SaleValidate } from '../middleware';

export default class SaleRouter {
  public route: Router;

  constructor() {
    this.route = Router();

    this.router();
  }

  private router(): void {
    const saleController = SaleFactory.create();

    this.route
      .get('/', Pagination.create, saleController.getAll)
      .get('/:id', saleController.getById)
      .post('/', Authorization.authenticate, SaleValidate.verifyCreate, saleController.create)
      .put('/:id', Authorization.authenticate, SaleValidate.verifyUpdate, saleController.update)
      .delete('/:id', saleController.delete);
  }
}
