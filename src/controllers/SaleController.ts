/* eslint-disable import/no-cycle */
import { Request, Response } from 'express';
import { StatusCodes } from 'http-status-codes';
import { PatientFactory, ServiceFactory } from '../factories';
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

    this._saleService.patient = PatientFactory.PatientService();
    this._saleService.service = ServiceFactory.Service();
    const entity = await this._saleService.create(req.body);

    res.status(StatusCodes.CREATED).json(entity);
  }

  public override async update(req: Request, res: Response): Promise<void> {
    const { id } = req.params;

    this._saleService.patient = PatientFactory.PatientService();
    this._saleService.service = ServiceFactory.Service();
    const entity = await this._saleService.update(id, req.body);

    res.status(StatusCodes.OK).json(entity);
  }
}
