// import Joi from 'joi';
// import * as Joi from '@hapi/joi';
// import 'joi-extract-type';

// export enum Role {
//   ADMIN = 'ADMIN',
//   USER = 'USER',
// }

/* const schema = Joi.object({
  id: Joi.string().optional(),
  name: Joi.string().min(3).required(),
  email: Joi.string().email().required(),
  password: Joi.string().min(6).required(),
  role: Joi.string()
    .valid(...Object.values(Role))
    .required(),
  createdAt: Joi.date().optional(),
  updatedAt: Joi.date().optional(),
  sale: Joi.array().optional(),
});

export type UserDTO = Joi.extractType<typeof schema>;

export default schema; */

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
