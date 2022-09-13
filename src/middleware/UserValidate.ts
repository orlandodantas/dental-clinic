/* eslint-disable @typescript-eslint/naming-convention */
import { NextFunction, Request, Response } from 'express';
import { StatusCodes } from 'http-status-codes';
import Joi from 'joi';
import { Role } from '../types';

export default class UserValidate {
  public static verifyCreate(req: Request, res: Response, next: NextFunction): Response | void {
    const schema = Joi.object({
      name: Joi.string().min(3).max(80).required().messages({
        'string.base': '"name" deve ser um texto',
        'string.min': '"name" deve ser no mínimo 3 caracteres',
        'string.max': '"name" deve ser no máximo 80 caracteres',
        'string.empty': '"name" não pode ser vazia',
        'any.required': '"name" é obrigatório',
      }),
      email: Joi.string().email().required().messages({
        'string.base': '"email" deve ser um texto',
        'string.empty': '"email" não pode ser vazia',
        'string.email': '"email" precisa conter um e-mail válido',
        'any.required': '"email" é obrigatório',
      }),
      password: Joi.string().min(6).required().messages({
        'string.base': '"password" deve ser um texto',
        'string.min': '"password" deve ser no mínimo 6 caracteres',
        'string.empty': '"password" não pode ser vazia',
        'any.required': '"password" é obrigatório',
      }),
      role: Joi.string()
        .valid(...Object.values(Role))
        .messages({
          'any.only': `"role" deve ser de um dos tipos a seguir ${Object.values(Role)}`,
          'any.required': '"role" é obrigatório',
        }),
    });

    const { error } = schema.validate(req.body);

    if (error) {
      return res.status(StatusCodes.BAD_REQUEST).json({ message: error.message });
    }

    next();
  }

  public static verifyUpdate(req: Request, res: Response, next: NextFunction): Response | void {
    const schema = Joi.object({
      name: Joi.string().min(3).max(80).required().messages({
        'string.base': '"name" deve ser um texto',
        'string.min': '"name" deve ser no mínimo 3 caracteres',
        'string.max': '"name" deve ser no máximo 80 caracteres',
        'string.empty': '"name" não pode ser vazia',
        'any.required': '"name" é obrigatório',
      }),
      email: Joi.string().email().required().messages({
        'string.base': '"email" deve ser um texto',
        'string.empty': '"email" não pode ser vazia',
        'string.email': '"email" precisa conter um e-mail válido',
        'any.required': '"email" é obrigatório',
      }),
      role: Joi.string()
        .valid(...Object.values(Role))
        .messages({
          'any.only': `"role" deve ser de um dos tipos a seguir ${Object.values(Role)}`,
          'any.required': '"role" é obrigatório',
        }),
    });

    const { error } = schema.validate(req.body);

    if (error) {
      console.error(error);
      return res.status(StatusCodes.BAD_REQUEST).json({ message: error.message });
    }

    next();
  }

  public static verifyLogin(req: Request, res: Response, next: NextFunction): Response | void {
    const schema = Joi.object({
      email: Joi.string().email().required().messages({
        'string.base': '"email" deve ser um texto',
        'string.empty': '"email" não pode ser vazia',
        'string.email': '"email" precisa conter um e-mail válido',
        'any.required': '"email" é obrigatório',
      }),
      password: Joi.string().min(6).required().messages({
        'string.base': '"password" deve ser um texto',
        'string.min': '"password" deve ser no mínimo 6 caracteres',
        'string.empty': '"password" não pode ser vazia',
        'any.required': '"password" é obrigatório',
      }),
    });

    const { error } = schema.validate(req.body);

    if (error) {
      console.error(error);
      return res.status(StatusCodes.BAD_REQUEST).json({ message: error.message });
    }

    next();
  }
}
