import { AccountsReceivable, PrismaClient, SaleItem } from '@prisma/client';
import { AccountsReceivableDTO, SaleDTO, SaleItemDTO } from '../types';
import { ISaleModel } from './interfaces';

export default class SaleModel implements ISaleModel {
  private _connection: PrismaClient;

  constructor(connection: PrismaClient) {
    this._connection = connection;
  }

  public async getAll(skip: number, limit: number): Promise<SaleDTO[]> {
    return this._connection.sale.findMany({
      skip,
      take: limit,
    });
  }

  public async getByID(id: string): Promise<SaleDTO | null> {
    return this._connection.sale.findUnique({
      where: { id },
    });
  }

  public async create(sale: SaleDTO): Promise<SaleDTO> {
    const { patientId, totalValue, userId, saleItem, accountsReceivable } = sale;

    return this._connection.sale.create({
      data: {
        patientId,
        totalValue,
        userId,
        saleItem: {
          createMany: {
            data: saleItem as SaleItemDTO[],
          },
        },
        accountsReceivable: {
          createMany: {
            data: accountsReceivable as AccountsReceivableDTO[],
          },
        },
      },
      include: {
        saleItem: true,
        accountsReceivable: true,
      },
    });
  }

  public async update(id: string, sale: SaleDTO): Promise<SaleDTO> {
    const { patientId, totalValue, saleItem, accountsReceivable } = sale;

    if (saleItem && accountsReceivable) {
      const idsSaleItens = saleItem.map((item) => item.id as string);
      const idsAccountsReceivable = accountsReceivable.map((item) => item.id as string);

      const saleItemDeleted = this._connection.saleItem.deleteMany({
        where: {
          // eslint-disable-next-line @typescript-eslint/naming-convention
          AND: {
            id: { notIn: idsSaleItens },
            saleId: id,
          },
        },
      });

      const accountsReceivableDeleted = this._connection.accountsReceivable.deleteMany({
        where: {
          // eslint-disable-next-line @typescript-eslint/naming-convention
          AND: {
            id: { notIn: idsAccountsReceivable },
            saleId: id,
          },
        },
      });

      const saleItens = saleItem.map((item) =>
        this._connection.saleItem.upsert({
          where: {
            id: item.id,
          },
          create: {
            quantity: item.quantity,
            value: item.value,
            serviceId: item.serviceId,
            saleId: id,
          },
          update: {
            ...(item as SaleItem),
            saleId: id,
          },
        }),
      );

      const accounts = accountsReceivable.map((item) =>
        this._connection.accountsReceivable.upsert({
          where: {
            id: item.id,
          },
          create: {
            expirationDate: item.expirationDate,
            value: item.value,
            saleId: id,
          },
          update: {
            ...(item as AccountsReceivable),
            saleId: id,
          },
        }),
      );

      const saleData = this._connection.sale.update({
        where: { id },
        data: {
          patientId,
          totalValue,
        },
        include: {
          saleItem: true,
          accountsReceivable: true,
        },
      });

      await this._connection.$transaction([
        saleItemDeleted,
        accountsReceivableDeleted,
        ...saleItens,
        ...accounts,
        saleData,
      ]);

      const saleDataUpdated = await saleData;

      return saleDataUpdated;
    }

    return sale;
  }

  public async delete(id: string): Promise<void> {
    await this._connection.sale.delete({
      where: { id },
    });
  }
}
