import { PrismaClient } from '@prisma/client';
import { PatientDTO } from '../types';
import { IPatientModel } from './interfaces';

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

  public async getByID(id: string): Promise<PatientDTO | null> {
    return this._connection.patient.findUnique({
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
    await this._connection.patient.delete({
      where: { id },
    });
  }
}
