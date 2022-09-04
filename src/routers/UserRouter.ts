import { Router } from 'express';
import { UserFactory } from '../factories';
import { Pagination, UserValidate } from '../middleware';

export default class UserRouter {
  public route: Router;

  constructor() {
    this.route = Router();

    this.router();
  }

  private router(): void {
    const userController = UserFactory.create();

    this.route
      .get('/', Pagination.create, userController.getAll)
      .get('/:id', userController.getById)
      .post('/', UserValidate.verifyCreate, userController.create)
      .put('/:id', UserValidate.verifyUpdate, userController.update)
      .delete('/:id', userController.delete);
  }
}
