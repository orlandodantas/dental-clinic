import { UserDTO } from '../../types';
import IGenericModel from './IGenericModel';

export default interface IUserModel extends IGenericModel<UserDTO> {
  getByEmail(email: string): Promise<UserDTO | null>;
}
