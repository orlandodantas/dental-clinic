import { PrismaClient, SaleItem } from '@prisma/client';
import { SaleItemDTO } from '../types';
import { ISaleItemModel } from './interfaces';

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

  public async getByID(id: string): Promise<SaleItemDTO | null> {
    return this._connection.saleItem.findUnique({
      where: { id },
    });
  }

  public async getBySale(saleId: string): Promise<SaleItemDTO[]> {
    return this._connection.saleItem.findMany({
      where: { saleId },
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
    await this._connection.saleItem.delete({
      where: { id },
    });
  }
}
