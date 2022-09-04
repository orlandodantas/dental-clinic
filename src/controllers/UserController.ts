import { IUserService } from '../services/interfaces';
import { UserDTO } from '../types';
import GenericController from './GenericController';
import { IUserController } from './interfaces';

export default class UserController extends GenericController<UserDTO> implements IUserController {
  private _userService: IUserService;

  constructor(service: IUserService) {
    super(service);
    this._userService = service;
  }
}
