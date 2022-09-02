import { PrismaClient, SaleItem } from '@prisma/client';
import { ISaleItemModel } from './interfaces';
import { SaleItemDTO } from './types';

export default class SaleItemModel implements ISaleItemModel {
  private _connection: PrismaClient;

  constructor(connection: PrismaClient) {
    this._connection = connection;
  }

  public async getAll(skip: number, limit: number): Promise<SaleItemDTO[]> {
    return this._connection.saleItem.findMany({
      skip,
      take: limit,
    });
  }

  public async getByID(id: string): Promise<SaleItemDTO> {
    return this._connection.saleItem.findUniqueOrThrow({
      where: { id },
    });
  }

  public async create(saleItem: SaleItemDTO): Promise<SaleItemDTO> {
    return this._connection.saleItem.create({
      data: saleItem as SaleItem,
    });
  }

  public async update(id: string, saleItem: SaleItemDTO): Promise<SaleItemDTO> {
    return this._connection.saleItem.update({
      where: { id },
      data: saleItem as SaleItem,
    });
  }

  public async delete(id: string): Promise<void> {
    this._connection.saleItem.delete({
      where: { id },
    });
  }
}
