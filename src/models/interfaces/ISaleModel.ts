import { SaleDTO } from '../../types';

export default interface ISaleModel {
  getAll(skip: number, limit: number): Promise<SaleDTO[]>;
  getByID(id: string): Promise<SaleDTO>;
  create(sale: SaleDTO): Promise<SaleDTO>;
  update(id: string, sale: SaleDTO): Promise<SaleDTO>;
  delete(id: string): Promise<void>;
}
