import { PrismaClient, Sale } from '@prisma/client';
import { SaleDTO } from '../types';
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

  public async getByID(id: string): Promise<SaleDTO> {
    return this._connection.sale.findUniqueOrThrow({
      where: { id },
    });
  }

  public async create(sale: SaleDTO): Promise<SaleDTO> {
    return this._connection.sale.create({
      data: sale as Sale,
    });
  }

  public async update(id: string, sale: SaleDTO): Promise<SaleDTO> {
    return this._connection.sale.update({
      where: { id },
      data: sale as Sale,
    });
  }

  public async delete(id: string): Promise<void> {
    this._connection.sale.delete({
      where: { id },
    });
  }
}
