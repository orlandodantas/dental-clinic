import { Router } from 'express';
import { ServiceFactory } from '../factories';
import { Pagination, ServiceValidate } from '../middleware';

export default class ServiceRouter {
  public route: Router;

  constructor() {
    this.route = Router();

    this.router();
  }

  private router(): void {
    const serviceController = ServiceFactory.create();

    this.route
      .get('/', Pagination.create, serviceController.getAll)
      .get('/:id', serviceController.getById)
      .post('/', ServiceValidate.verify, serviceController.create)
      .put('/:id', ServiceValidate.verify, serviceController.update)
      .delete('/:id', serviceController.delete);
  }
}
