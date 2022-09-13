import { IServiceModel } from '../models/interfaces';
import { ServiceDTO } from '../types';
import GenericService from './GenericService';
import { IServiceService } from './interfaces';

export default class ServiceService extends GenericService<ServiceDTO> implements IServiceService {
  private _serviceModel: IServiceModel;

  constructor(model: IServiceModel) {
    super(model);
    this._serviceModel = model;
  }
}
