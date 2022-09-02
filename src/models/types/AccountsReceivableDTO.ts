import SaleDTO from './SaleDTO';

type AccountsReceivableDTO = {
  id?: string;
  portion: number;
  value: number;
  receivingDate?: Date;
  sale?: SaleDTO;
  saleId: string;
  createdAt?: Date;
  updatedAt?: Date;
};

export default AccountsReceivableDTO;
