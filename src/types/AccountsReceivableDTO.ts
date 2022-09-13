/* eslint-disable import/no-cycle */
import SaleDTO from './SaleDTO';

type AccountsReceivableDTO = {
  id?: string;
  value: number;
  expirationDate: Date;
  receivingDate?: Date | null;
  sale?: SaleDTO;
  saleId: string;
  createdAt?: Date;
  updatedAt?: Date;
};

export default AccountsReceivableDTO;
