/* eslint-disable import/no-cycle */
import { AccountsReceivableController } from '../controllers';
import { AccountsReceivableModel, connection } from '../models';
import { AccountsReceivableService } from '../services';

export default class AccountsReceivableFactory {
  public static create(): AccountsReceivableController {
    const accountsReceivableModel = new AccountsReceivableModel(connection);
    const accountsReceivableService = new AccountsReceivableService(accountsReceivableModel);
    const accountsReceivableController = new AccountsReceivableController(
      accountsReceivableService,
    );

    return accountsReceivableController;
  }
}
