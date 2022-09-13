import { Router } from 'express';
import { UserFactory } from '../factories';
import { Authorization, Pagination, UserValidate } from '../middleware';

export default class UserRouter {
  public route: Router;

  constructor() {
    this.route = Router();

    this.router();
  }

  private router(): void {
    const userController = UserFactory.create();

    this.route
      .get('/', Authorization.authenticate, Pagination.create, userController.getAll)
      .get('/:id', Authorization.authenticate, userController.getById)
      .post('/', UserValidate.verifyCreate, userController.create)
      .put('/:id', Authorization.authenticate, UserValidate.verifyUpdate, userController.update)
      .delete('/:id', Authorization.authenticate, userController.delete);
  }
}
