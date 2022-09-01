import PatientDTO from './PatientDTO';
import UserDTO from './UserDTO';

type SaleDTO = {
  id?: string;
  patient?: PatientDTO;
  patientId: string;
  user?: UserDTO;
  userId: string;
  createdAt: Date;
  updatedAt: Date;
  saleItem?: [];
  accountsReceivable?: [];
};

export default SaleDTO;
