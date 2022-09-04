import { Router } from 'express';
import { UserFactory } from '../factories';
import Pagination from '../middleware/Pagination';
import UserMiddleware from '../middleware/UserMiddleware';

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
      .post('/', UserMiddleware.verifyCreate, userController.create)
      .put('/:id', UserMiddleware.verifyUpdate, userController.update)
      .delete('/:id', userController.delete);
  }
}
