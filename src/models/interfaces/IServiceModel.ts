import { ServiceDTO } from '../types';

export default interface IServiceModel {
  getAll(skip: number, limit: number): Promise<ServiceDTO[]>;
  getByID(id: string): Promise<ServiceDTO>;
  create(service: ServiceDTO): Promise<ServiceDTO>;
  update(id: string, service: ServiceDTO): Promise<ServiceDTO>;
  delete(id: string): Promise<void>;
}
