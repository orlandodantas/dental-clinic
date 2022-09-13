import { SaleDTO } from '../../types';
import IGenericService from './IGenericService';
import IPatientService from './IPatientService';
import IServiceService from './IServiceService';

export default interface ISaleService extends IGenericService<SaleDTO> {
  set patient(patient: IPatientService);
  set service(service: IServiceService);
}
