import { PrismaClient, Service } from '@prisma/client';
import { ServiceDTO } from '../types';
import { IServiceModel } from './interfaces';

export default class ServiceModel implements IServiceModel {
  private _connection: PrismaClient;

  constructor(connection: PrismaClient) {
    this._connection = connection;
  }

  public async getAll(skip: number, limit: number): Promise<ServiceDTO[]> {
    return this._connection.service.findMany({
      skip,
      take: limit,
    });
  }

  public async getByID(id: string): Promise<ServiceDTO> {
    return this._connection.service.findUniqueOrThrow({
      where: { id },
    });
  }

  public async create(service: ServiceDTO): Promise<ServiceDTO> {
    return this._connection.service.create({
      data: service as Service,
    });
  }

  public async update(id: string, service: ServiceDTO): Promise<ServiceDTO> {
    return this._connection.service.update({
      where: { id },
      data: service,
    });
  }

  public async delete(id: string): Promise<void> {
    this._connection.service.delete({
      where: { id },
    });
  }
}
