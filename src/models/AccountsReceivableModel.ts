import { AccountsReceivable, PrismaClient } from '@prisma/client';
import { AccountsReceivableDTO } from '../types';
import { IAccountsReceivableModel } from './interfaces';

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

  public async getByID(id: string): Promise<AccountsReceivableDTO | null> {
    return this._connection.accountsReceivable.findUnique({
      where: { id },
    });
  }

  public async getByReceived(dateInitial: Date, dateEnd: Date): Promise<AccountsReceivableDTO[]> {
    return this._connection.accountsReceivable.findMany({
      where: {
        receivingDate: {
          gte: dateInitial,
          lte: dateEnd,
        },
      },
    });
  }

  public async getByReceive(dateInitial: Date, dateEnd: Date): Promise<AccountsReceivableDTO[]> {
    return this._connection.accountsReceivable.findMany({
      where: {
        // eslint-disable-next-line @typescript-eslint/naming-convention
        AND: {
          expirationDate: {
            gte: dateInitial,
            lte: dateEnd,
          },
          receivingDate: null,
        },
      },
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

  public async patchReceive(id: string, date: Date): Promise<AccountsReceivableDTO> {
    return this._connection.accountsReceivable.update({
      where: {
        id,
      },
      data: {
        receivingDate: date,
      },
    });
  }

  public async delete(id: string): Promise<void> {
    await this._connection.accountsReceivable.delete({
      where: { id },
    });
  }
}
