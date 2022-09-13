import { IPatientService } from '../services/interfaces';
import { PatientDTO } from '../types';
import GenericController from './GenericController';
import { IPatientController } from './interfaces';

export default class PatientController
  extends GenericController<PatientDTO>
  implements IPatientController
{
  private _patientService: IPatientService;

  constructor(service: IPatientService) {
    super(service);
    this._patientService = service;
  }
}
