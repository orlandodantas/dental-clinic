/* eslint-disable import/no-cycle */
import { PatientController } from '../controllers';
import { IPatientController } from '../controllers/interfaces';
import { connection, PatientModel } from '../models';
import { PatientService } from '../services';
import { IPatientService } from '../services/interfaces';

export default class PatientFactory {
  public static create(): IPatientController {
    const patientModel = new PatientModel(connection);
    const patientService = new PatientService(patientModel);
    const patientController = new PatientController(patientService);

    return patientController;
  }

  public static PatientService(): IPatientService {
    const patientModel = new PatientModel(connection);
    const patientService = new PatientService(patientModel);

    return patientService;
  }
}
