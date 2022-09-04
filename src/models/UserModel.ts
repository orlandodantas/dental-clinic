import { PrismaClient, User } from '@prisma/client';
import { UserDTO } from '../types';
import { IUserModel } from './interfaces';

export default class UserModel implements IUserModel {
  private _connection: PrismaClient;
  private _selectFields: {
    id: boolean;
    name: boolean;
    email: boolean;
    role: boolean;
    createdAt: boolean;
    updatedAt: boolean;
    password: boolean;
  };

  constructor(connection: PrismaClient) {
    this._connection = connection;
    this._selectFields = {
      id: true,
      name: true,
      email: true,
      role: true,
      createdAt: true,
      updatedAt: true,
      password: false,
    };
  }

  public async getAll(skip: number, limit: number): Promise<UserDTO[]> {
    return this._connection.user.findMany({
      skip,
      take: limit,
      select: this._selectFields,
    });
  }

  public async getByID(id: string): Promise<UserDTO | null> {
    return this._connection.user.findUnique({
      where: { id },
      select: this._selectFields,
    });
  }

  public async getByEmail(email: string): Promise<UserDTO | null> {
    return this._connection.user.findUnique({
      where: { email },
    });
  }

  public async create(user: UserDTO): Promise<UserDTO> {
    return this._connection.user.create({
      data: user as User,
      select: this._selectFields,
    });
  }

  public async update(id: string, user: UserDTO): Promise<UserDTO> {
    return this._connection.user.update({
      where: { id },
      data: user,
      select: this._selectFields,
    });
  }

  public async delete(id: string): Promise<void> {
    await this._connection.user.delete({
      where: { id },
    });
  }
}
