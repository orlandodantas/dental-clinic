import { Router } from 'express';
import { ServiceFactory } from '../factories';
import { Authorization, Pagination, ServiceValidate } from '../middleware';

export default class ServiceRouter {
  public route: Router;

  constructor() {
    this.route = Router();

    this.router();
  }

  private router(): void {
    const serviceController = ServiceFactory.create();

    this.route
      .get('/', Authorization.authenticate, Pagination.create, serviceController.getAll)
      .get('/:id', Authorization.authenticate, serviceController.getById)
      .post('/', Authorization.authenticate, ServiceValidate.verify, serviceController.create)
      .put('/:id', Authorization.authenticate, ServiceValidate.verify, serviceController.update)
      .delete('/:id', Authorization.authenticate, serviceController.delete);
  }
}
