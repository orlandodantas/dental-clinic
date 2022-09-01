import { PatientDTO } from '../types';

export default interface IPatientModel {
  getAll(skip: number, limit: number): Promise<PatientDTO[]>;
  getByID(id: string): Promise<PatientDTO>;
  create(user: PatientDTO): Promise<PatientDTO>;
  update(id: string, user: PatientDTO): Promise<PatientDTO>;
  delete(id: string): Promise<void>;
}
