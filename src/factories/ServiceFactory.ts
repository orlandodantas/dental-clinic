import { ServiceController } from '../controllers';
import { IServiceController } from '../controllers/interfaces';
import { connection, ServiceModel } from '../models';
import { ServiceService } from '../services';

export default class ServiceFactory {
  public static create(): IServiceController {
    const serviceModel = new ServiceModel(connection);
    const serviceService = new ServiceService(serviceModel);
    const serviceController = new ServiceController(serviceService);

    return serviceController;
  }
}
