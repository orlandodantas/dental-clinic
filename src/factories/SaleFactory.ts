/* eslint-disable import/no-cycle */
import { SaleController } from '../controllers';
import { ISaleController } from '../controllers/interfaces';
import { connection, SaleModel } from '../models';
import { SaleService } from '../services';

export default class SaleFactory {
  public static create(): ISaleController {
    const saleModel = new SaleModel(connection);
    const saleService = new SaleService(saleModel);
    const saleController = new SaleController(saleService);

    return saleController;
  }
}
