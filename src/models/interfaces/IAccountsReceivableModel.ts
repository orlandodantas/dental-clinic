import { AccountsReceivableDTO } from '../../types';

export default interface IAccountsReceivableModel {
  getAll(skip: number, limit: number): Promise<AccountsReceivableDTO[]>;
  getByID(id: string): Promise<AccountsReceivableDTO>;
  create(AccountsReceivableDTO: AccountsReceivableDTO): Promise<AccountsReceivableDTO>;
  update(id: string, AccountsReceivableDTO: AccountsReceivableDTO): Promise<AccountsReceivableDTO>;
  delete(id: string): Promise<void>;
}
