import { PatientDTO } from '../../types';
import IGenericService from './IGenericService';

export default interface IPatientService extends IGenericService<PatientDTO> {}
