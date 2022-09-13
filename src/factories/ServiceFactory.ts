/* eslint-disable import/no-cycle */
import { ServiceController } from '../controllers';
import { IServiceController } from '../controllers/interfaces';
import { connection, ServiceModel } from '../models';
import { ServiceService } from '../services';
import { IServiceService } from '../services/interfaces';

export default class ServiceFactory {
  public static create(): IServiceController {
    const serviceModel = new ServiceModel(connection);
    const serviceService = new ServiceService(serviceModel);
    const serviceController = new ServiceController(serviceService);

    return serviceController;
  }

  public static Service(): IServiceService {
    const serviceModel = new ServiceModel(connection);
    const service = new ServiceService(serviceModel);

    return service;
  }
}
