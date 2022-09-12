import { Request, Response } from 'express';
import { StatusCodes } from 'http-status-codes';
import { IAccountsReceivableService } from '../services/interfaces';
import { AccountsReceivableDTO } from '../types';
import GenericController from './GenericController';
import { IAccountsReceivableController } from './interfaces';

export default class AccountsReceivableController
  extends GenericController<AccountsReceivableDTO>
  implements IAccountsReceivableController
{
  private _patientService: IAccountsReceivableService;

  constructor(service: IAccountsReceivableService) {
    super(service);
    this._patientService = service;

    this.patchReceive = this.patchReceive.bind(this);
  }

  public async patchReceive(req: Request, res: Response): Promise<void> {
    const { id } = req.params;
    const { date } = req.body;

    const accountsData = await this._patientService.patchReceive(id, date);

    res.status(StatusCodes.OK).json(accountsData);
  }
}
