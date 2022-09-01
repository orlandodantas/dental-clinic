import { PrismaClient } from '@prisma/client';
import { IPatientModel } from './interfaces';
import { PatientDTO } from './types';

export default class PatientModel implements IPatientModel {
  private _connection: PrismaClient;

  constructor(connection: PrismaClient) {
    this._connection = connection;
  }

  public async getAll(skip: number, limit: number): Promise<PatientDTO[]> {
    return this._connection.patient.findMany({
      skip,
      take: limit,
    });
  }

  public async getByID(id: string): Promise<PatientDTO> {
    return this._connection.patient.findUniqueOrThrow({
      where: { id },
    });
  }

  public async create(patient: PatientDTO): Promise<PatientDTO> {
    return this._connection.patient.create({
      data: patient as PatientDTO,
    });
  }

  public async update(id: string, patient: PatientDTO): Promise<PatientDTO> {
    return this._connection.patient.update({
      where: { id },
      data: patient,
    });
  }

  public async delete(id: string): Promise<void> {
    this._connection.patient.delete({
      where: { id },
    });
  }
}
