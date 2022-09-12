import { AccountsReceivableDTO } from '../../types';
import IGenericService from './IGenericService';

export default interface IAccountsReceivableService extends IGenericService<AccountsReceivableDTO> {
  patchReceive(id: string, date: Date): Promise<AccountsReceivableDTO>;
}
