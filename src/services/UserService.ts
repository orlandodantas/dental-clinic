import { ConflictError } from 'restify-errors';
import { IUserModel } from '../models/interfaces';
import { UserDTO } from '../types';
import { Encrypt } from '../utils';
import GenericService from './GenericService';
import { IUserService } from './interfaces';

export default class UserService extends GenericService<UserDTO> implements IUserService {
  private _userModel: IUserModel;

  constructor(model: IUserModel) {
    super(model);
    this._userModel = model;
  }

  public override async create(entity: UserDTO): Promise<UserDTO> {
    const userData = await this._userModel.getByEmail(entity.email);

    if (userData) throw new ConflictError('E-mail já cadastrado!');

    const entityCopy = entity;

    entityCopy.password = await Encrypt.createHash(entityCopy.password as string);

    return super.create(entityCopy);
  }
}
