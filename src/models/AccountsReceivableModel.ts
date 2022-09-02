import { AccountsReceivable, PrismaClient } from '@prisma/client';
import { IAccountsReceivableModel } from './interfaces';
import { AccountsReceivableDTO } from './types';

export default class AccountsReceivableModel implements IAccountsReceivableModel {
  private _connection: PrismaClient;

  constructor(connection: PrismaClient) {
    this._connection = connection;
  }

  public async getAll(skip: number, limit: number): Promise<AccountsReceivableDTO[]> {
    return this._connection.accountsReceivable.findMany({
      skip,
      take: limit,
    });
  }

  public async getByID(id: string): Promise<AccountsReceivableDTO> {
    return this._connection.accountsReceivable.findUniqueOrThrow({
      where: { id },
    });
  }

  public async create(accountsReceivable: AccountsReceivableDTO): Promise<AccountsReceivableDTO> {
    return this._connection.accountsReceivable.create({
      data: accountsReceivable as AccountsReceivable,
    });
  }

  public async update(
    id: string,
    accountsReceivable: AccountsReceivableDTO,
  ): Promise<AccountsReceivableDTO> {
    return this._connection.accountsReceivable.update({
      where: { id },
      data: accountsReceivable as AccountsReceivable,
    });
  }

  public async delete(id: string): Promise<void> {
    this._connection.accountsReceivable.delete({
      where: { id },
    });
  }
}
