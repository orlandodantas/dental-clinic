/* eslint-disable import/no-cycle */
import { SaleItemController } from '../controllers';
import { ISaleItemController } from '../controllers/interfaces';
import { connection, SaleItemModel } from '../models';
import { SaleItemService } from '../services';

export default class SaleItemFactory {
  public static create(): ISaleItemController {
    const saleItemModel = new SaleItemModel(connection);
    const saleItemService = new SaleItemService(saleItemModel);
    const saleItemController = new SaleItemController(saleItemService);

    return saleItemController;
  }
}
