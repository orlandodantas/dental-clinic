import { ConflictError, UnauthorizedError } from 'restify-errors';
import { IUserModel } from '../models/interfaces';
import { Role, UserDTO } from '../types';
import { Encrypt } from '../utils';
import JWTAuthenticate from '../utils/JWTAuthenticate';
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

  public async login(email: string, password: string): Promise<string> {
    const userData = await this._userModel.getByEmail(email);

    if (!userData) throw new UnauthorizedError('Email e/ou Senha Inválida!');

    const isPassword = await Encrypt.compare(password, userData.password as string);

    if (!isPassword) throw new UnauthorizedError('Email e/ou Senha Inválida!');

    const payload = {
      id: userData.id as string,
      name: userData.name,
      email: userData.email,
      role: userData.role as Role,
    };

    return JWTAuthenticate.createToken(payload);
  }
}
