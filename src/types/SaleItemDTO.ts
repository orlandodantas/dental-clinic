/* eslint-disable import/no-cycle */
import SaleDTO from './SaleDTO';
import ServiceDTO from './ServiceDTO';

type SaleItemDTO = {
  id?: string;
  quantity: number;
  value: number;
  sale?: SaleDTO;
  saleId: string;
  service?: ServiceDTO;
  serviceId: string;
  createdAt?: Date;
  updatedAt?: Date;
};

export default SaleItemDTO;
