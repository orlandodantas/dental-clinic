import { SaleItemDTO } from '../types';

export default interface ISaleItemModel {
  getAll(skip: number, limit: number): Promise<SaleItemDTO[]>;
  getByID(id: string): Promise<SaleItemDTO>;
  create(saleItem: SaleItemDTO): Promise<SaleItemDTO>;
  update(id: string, saleItem: SaleItemDTO): Promise<SaleItemDTO>;
  delete(id: string): Promise<void>;
}
