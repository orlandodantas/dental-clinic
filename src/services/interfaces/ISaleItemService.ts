import { SaleItemDTO } from '../../types';
import IGenericService from './IGenericService';

export default interface ISaleItemService extends IGenericService<SaleItemDTO> {
  getBySale(saleId: string): Promise<SaleItemDTO[]>;
}
