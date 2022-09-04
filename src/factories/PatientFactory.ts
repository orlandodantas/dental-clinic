import { PatientController } from '../controllers';
import { IPatientController } from '../controllers/interfaces';
import { connection, PatientModel } from '../models';
import { PatientService } from '../services';

export default class PatientFactory {
  public static create(): IPatientController {
    const patientModel = new PatientModel(connection);
    const patientService = new PatientService(patientModel);
    const patientController = new PatientController(patientService);

    return patientController;
  }
}
