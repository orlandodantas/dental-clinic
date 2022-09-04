import { Router } from 'express';
import { UserFactory } from '../factories';
import UserMiddleware from '../middleware/UserMiddleware';

export default class LoginRouter {
  public route: Router;

  constructor() {
    this.route = Router();

    this.router();
  }

  private router(): void {
    const userController = UserFactory.create();

    this.route.post('/', UserMiddleware.verifyLogin, userController.login);
  }
}
