import { Request, Response } from 'express';
import { IUserService } from '../services/interfaces';
import { UserDTO } from '../types';
import GenericController from './GenericController';
import { IUserController } from './interfaces';

export default class UserController extends GenericController<UserDTO> implements IUserController {
  private _userService: IUserService;

  constructor(service: IUserService) {
    super(service);
    this._userService = service;

    this.login = this.login.bind(this);
  }

  public async login(req: Request, res: Response): Promise<void> {
    const { email, password } = req.body;

    const token = await this._userService.login(email, password);

    res.status(200).json({ token });
  }
}
