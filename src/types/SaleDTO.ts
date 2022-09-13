/* eslint-disable import/no-cycle */
import AccountsReceivableDTO from './AccountsReceivableDTO';
import PatientDTO from './PatientDTO';
import SaleItemDTO from './SaleItemDTO';
import UserDTO from './UserDTO';

type SaleDTO = {
  id?: string;
  totalValue: number;
  patient?: PatientDTO;
  patientId: string;
  user?: UserDTO;
  userId: string;
  createdAt: Date;
  updatedAt: Date;
  saleItem?: SaleItemDTO[];
  accountsReceivable?: AccountsReceivableDTO[];
};

export default SaleDTO;
