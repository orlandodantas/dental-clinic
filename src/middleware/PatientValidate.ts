/* eslint-disable @typescript-eslint/naming-convention */
import { NextFunction, Request, Response } from 'express';
import { StatusCodes } from 'http-status-codes';
import Joi from 'joi';

enum states {
  AC = 'AC',
  AL = 'AL',
  AP = 'AP',
  AM = 'AM',
  BA = 'BA',
  CE = 'CE',
  DF = 'DF',
  ES = 'ES',
  GO = 'GO',
  MA = 'MA',
  MT = 'MT',
  MS = 'MS',
  MG = 'MG',
  PA = 'PA',
  PB = 'PB',
  PR = 'PR',
  PE = 'PE',
  PI = 'PI',
  RJ = 'RJ',
  RN = 'RN',
  RS = 'RS',
  RO = 'RO',
  RR = 'RR',
  SC = 'SC',
  SP = 'SP',
  SE = 'SE',
  TO = 'TO',
}

export default class PatientValidate {
  public static verify(req: Request, res: Response, next: NextFunction): Response | void {
    const schema = Joi.object({
      name: Joi.string().min(3).max(80).required().messages({
        'string.base': '"name" deve ser um texto',
        'string.min': '"name" deve ser no mínimo 3 caracteres',
        'string.max': '"name" deve ser no máximo 80 caracteres',
        'string.empty': '"name" não pode ser vazia',
        'any.required': '"name" é obrigatório',
      }),
      address: Joi.string().required().messages({
        'string.base': '"address" deve ser um texto',
        'string.empty': '"address" não pode ser vazia',
        'any.required': '"address" é obrigatório',
      }),
      number: Joi.string().max(9).required().messages({
        'string.base': '"number" deve ser uma string',
        'string.max': '"number" deve ser no máximo 9 caracteres',
        'string.empty': '"number" não pode ser vazio',
        'any.required': '"number" é obrigatório',
      }),
      city: Joi.string().required().messages({
        'string.base': '"city" deve ser um texto',
        'string.empty': '"city" não pode ser vazia',
        'any.required': '"city" é obrigatório',
      }),
      state: Joi.string()
        .valid(...Object.values(states))
        .messages({
          'any.only': '"state" deve ser uma UF válida',
          'any.required': '"state" é obrigatório',
        }),
      cep: Joi.string()
        .regex(/^[0-9]{5}[0-9]{3}$/)
        .required()
        .messages({
          'string.base': '"cep" deve ser uma string de números sem qualquer caractere especial',
          'string.empty': '"cep" não pode ser vazio',
          'any.required': '"cep" é obrigatório',
          'string.pattern.base':
            '"cep" deve ser uma string contendo oito números sem qualquer caractere especial por ex: 48790000',
        }),
    });

    const { error } = schema.validate(req.body);

    if (error) {
      console.error(error);
    }

    if (error) return res.status(StatusCodes.BAD_REQUEST).json({ message: error.message });

    next();
  }
}
