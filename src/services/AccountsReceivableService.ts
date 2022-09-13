import { ConflictError } from 'restify-errors';
import { IAccountsReceivableModel } from '../models/interfaces';
import { AccountsReceivableDTO } from '../types';
import GenericService from './GenericService';
import { IAccountsReceivableService } from './interfaces';

export default class AccountsReceivableService
  extends GenericService<AccountsReceivableDTO>
  implements IAccountsReceivableService
{
  private _accountsReceivableModel: IAccountsReceivableModel;

  constructor(model: IAccountsReceivableModel) {
    super(model);
    this._accountsReceivableModel = model;
  }

  public async patchReceive(id: string, date: Date): Promise<AccountsReceivableDTO> {
    const receiveData = await super.getByID(id);

    if (receiveData.receivingDate) throw new ConflictError('Conta já foi recebida!');

    return this._accountsReceivableModel.patchReceive(id, date);
  }

  public async getByReceived(dateInitial: Date, dateEnd: Date): Promise<AccountsReceivableDTO[]> {
    return this._accountsReceivableModel.getByReceived(dateInitial, dateEnd);
  }

  public async getByReceive(dateInitial: Date, dateEnd: Date): Promise<AccountsReceivableDTO[]> {
    return this._accountsReceivableModel.getByReceive(dateInitial, dateEnd);
  }
}
