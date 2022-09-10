import { Request, Response } from 'express';
import { ISaleService } from '../services/interfaces';
import { SaleDTO } from '../types';
import GenericController from './GenericController';
import { ISaleController } from './interfaces';

export default class SaleController extends GenericController<SaleDTO> implements ISaleController {
  private _saleService: ISaleService;

  constructor(service: ISaleService) {
    super(service);
    this._saleService = service;
  }

  public override async create(req: Request, res: Response): Promise<void> {
    const { id } = req.login;
    req.body.userId = id;

    await super.create(req, res);
  }

  // public override async update(req: Request, res: Response): Promise<void> {
  //   const { id } = req.login;
  //   req.body.userId = id;

  //   await super.update(req, res);
  // }
}
