import { PrismaClient, User } from '@prisma/client';
import { IUserModel } from './interfaces';
import { UserDTO } from './types';

export default class UserModel implements IUserModel {
  private _connection: PrismaClient;

  constructor(connection: PrismaClient) {
    this._connection = connection;
  }

  public async getAll(skip: number, limit: number): Promise<UserDTO[]> {
    return this._connection.user.findMany({
      skip,
      take: limit,
    });
  }

  public async getByID(id: string): Promise<UserDTO> {
    return this._connection.user.findUniqueOrThrow({
      where: { id },
    });
  }

  public async create(user: UserDTO): Promise<UserDTO> {
    return this._connection.user.create({
      data: user as User,
    });
  }

  public async update(id: string, user: UserDTO): Promise<UserDTO> {
    return this._connection.user.update({
      where: { id },
      data: user,
    });
  }

  public async delete(id: string): Promise<void> {
    this._connection.user.delete({
      where: { id },
    });
  }
}
