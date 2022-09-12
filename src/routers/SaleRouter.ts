import { Router } from 'express';
import { SaleFactory, SaleItemFactory } from '../factories';
import { Authorization, Pagination, SaleValidate } from '../middleware';

export default class SaleRouter {
  public route: Router;

  constructor() {
    this.route = Router();

    this.router();
  }

  private router(): void {
    // Sale
    const saleController = SaleFactory.create();

    this.route
      .get('/', Pagination.create, saleController.getAll)
      .get('/:id', saleController.getById)
      .post('/', Authorization.authenticate, SaleValidate.verifyCreate, saleController.create)
      .put('/:id', Authorization.authenticate, SaleValidate.verifyUpdate, saleController.update)
      .delete('/:id', saleController.delete);

    // SaleItems
    const saleItemController = SaleItemFactory.create();

    this.route
      .get('/:id/items', Pagination.create, saleItemController.getBySale)
      .get('/:id/items/:saleId', saleItemController.getById);
  }
}
