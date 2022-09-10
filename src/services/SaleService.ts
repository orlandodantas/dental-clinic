import { BadRequestError } from 'restify-errors';
import { ISaleModel } from '../models/interfaces';
import { SaleDTO } from '../types';
import GenericService from './GenericService';
import { ISaleService } from './interfaces';

export default class SaleService extends GenericService<SaleDTO> implements ISaleService {
  private _saleModel: ISaleModel;

  constructor(model: ISaleModel) {
    super(model);
    this._saleModel = model;
  }

  public override async create(entity: SaleDTO): Promise<SaleDTO> {
    SaleService._verifySaleItem(entity);
    SaleService._verifyAccountsReceivable(entity);

    return super.create(entity);
  }

  public override async update(id: string, entity: SaleDTO): Promise<SaleDTO> {
    SaleService._verifySaleItem(entity);
    SaleService._verifyAccountsReceivable(entity);

    return super.update(id, entity);
  }

  private static _verifySaleItem(entity: SaleDTO): void {
    const totalValue = entity.saleItem?.reduce(
      (previousValue, currentValue) => previousValue + currentValue.value * currentValue.quantity,
      0.0,
    );

    if (totalValue !== entity.totalValue) {
      throw new BadRequestError(
        'O totalValue da venda precisa ser igual a soma da multiplicação do quantity pelo value do saleItem!',
      );
    }
  }

  private static _verifyAccountsReceivable(entity: SaleDTO): void {
    const totalValue = entity.accountsReceivable?.reduce(
      (previousValue, currentValue) => previousValue + currentValue.value,
      0.0,
    );

    if (totalValue !== entity.totalValue)
      throw new BadRequestError(
        'O totalValue da venda precisa ser igual a soma de todos os value de accountReceivable!',
      );
  }
}
