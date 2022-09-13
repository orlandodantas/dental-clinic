import { SaleItemDTO } from '../../types';
import IGenericModel from './IGenericModel';

export default interface ISaleItemModel extends IGenericModel<SaleItemDTO> {
  getBySale(saleId: string): Promise<SaleItemDTO[]>;
}
