import { IServiceService } from '../services/interfaces';
import { ServiceDTO } from '../types';
import GenericController from './GenericController';
import { IServiceController } from './interfaces';

export default class ServiceController
  extends GenericController<ServiceDTO>
  implements IServiceController
{
  private _serviceService: IServiceService;

  constructor(service: IServiceService) {
    super(service);
    this._serviceService = service;
  }
}
