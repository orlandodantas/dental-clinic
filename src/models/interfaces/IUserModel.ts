import { UserDTO } from '../../types';

export default interface IUserModel {
  getAll(skip: number, limit: number): Promise<UserDTO[]>;
  getByID(id: string): Promise<UserDTO>;
  create(user: UserDTO): Promise<UserDTO>;
  update(id: string, user: UserDTO): Promise<UserDTO>;
  delete(id: string): Promise<void>;
}
