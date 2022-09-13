import { Request, Response } from 'express';
import { StatusCodes } from 'http-status-codes';
import { ISaleItemService } from '../services/interfaces';
import { SaleItemDTO } from '../types';
import GenericController from './GenericController';
import { ISaleItemController } from './interfaces';

export default class SaleItemController
  extends GenericController<SaleItemDTO>
  implements ISaleItemController
{
  private _saleItemService: ISaleItemService;

  constructor(service: ISaleItemService) {
    super(service);
    this._saleItemService = service;

    this.getBySale = this.getBySale.bind(this);
  }

  public override async getById(req: Request, res: Response): Promise<void> {
    const { saleId } = req.params;

    const entity = await this._saleItemService.getByID(saleId);

    res.status(StatusCodes.OK).json(entity);
  }

  public async getBySale(req: Request, res: Response): Promise<void> {
    const { id } = req.params;

    const entity = await this._saleItemService.getBySale(id);

    res.status(StatusCodes.OK).json(entity);
  }
}
