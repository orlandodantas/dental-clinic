import { UserController } from '../controllers';
import { IUserController } from '../controllers/interfaces';
import { connection, UserModel } from '../models';
import { UserService } from '../services';

export default class UserFactory {
  public static create(): IUserController {
    const userModel = new UserModel(connection);
    const userService = new UserService(userModel);
    const userController = new UserController(userService);

    return userController;
  }
}
