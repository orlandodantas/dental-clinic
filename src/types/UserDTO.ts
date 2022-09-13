export enum Role {
  ADMIN = 'ADMIN',
  USER = 'USER',
}

type UserDTO = {
  id?: string;
  name: string;
  email: string;
  password?: string;
  role: 'ADMIN' | 'USER';
  createdAt?: Date;
  updatedAt?: Date;
  sale?: [];
};

export default UserDTO;
