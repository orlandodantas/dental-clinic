import { AccountsReceivableDTO } from '../../types';
import IGenericModel from './IGenericModel';

export default interface IAccountsReceivableModel extends IGenericModel<AccountsReceivableDTO> {
  patchReceive(id: string, date: Date): Promise<AccountsReceivableDTO>;
}
