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
  private _accountsReceivableService: IAccountsReceivableService;

  constructor(service: IAccountsReceivableService) {
    super(service);
    this._accountsReceivableService = service;

    this.patchReceive = this.patchReceive.bind(this);
    this.getByReceived = this.getByReceived.bind(this);
    this.getByReceive = this.getByReceive.bind(this);
  }

  public async patchReceive(req: Request, res: Response): Promise<void> {
    const { id } = req.params;
    const { date } = req.body;

    const accountsData = await this._accountsReceivableService.patchReceive(id, date);

    res.status(StatusCodes.OK).json(accountsData);
  }

  public async getByReceived(req: Request, res: Response): Promise<void> {
    const { dateInitial, dateEnd } = req.body;

    const entity = await this._accountsReceivableService.getByReceived(dateInitial, dateEnd);

    res.status(StatusCodes.OK).json(entity);
  }

  public async getByReceive(req: Request, res: Response): Promise<void> {
    const { dateInitial, dateEnd } = req.body;

    const entity = await this._accountsReceivableService.getByReceive(dateInitial, dateEnd);

    res.status(StatusCodes.OK).json(entity);
  }
}
