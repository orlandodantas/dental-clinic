import { ISaleItemModel } from '../models/interfaces';
import { SaleItemDTO } from '../types';
import GenericService from './GenericService';
import { ISaleItemService } from './interfaces';

export default class SaleItemService
  extends GenericService<SaleItemDTO>
  implements ISaleItemService
{
  private _saleItemModel: ISaleItemModel;

  constructor(model: ISaleItemModel) {
    super(model);
    this._saleItemModel = model;
  }

  public async getBySale(saleId: string): Promise<SaleItemDTO[]> {
    return this._saleItemModel.getBySale(saleId);
  }
}
