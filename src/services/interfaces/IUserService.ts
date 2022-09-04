import { UserDTO } from '../../types';
import IGenericService from './IGenericService';

export default interface IUserService extends IGenericService<UserDTO> {}
