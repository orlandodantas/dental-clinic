import { IPatientModel } from '../models/interfaces';
import { PatientDTO } from '../types';
import GenericService from './GenericService';
import { IPatientService } from './interfaces';

export default class PatientService extends GenericService<PatientDTO> implements IPatientService {
  private _patientModel: IPatientModel;

  constructor(model: IPatientModel) {
    super(model);
    this._patientModel = model;
  }
}
