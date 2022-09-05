/* eslint-disable @typescript-eslint/naming-convention */
import { NextFunction, Request, Response } from 'express';
import { StatusCodes } from 'http-status-codes';
import Joi from 'joi';

export default class ServiceValidate {
  public static verify(req: Request, res: Response, next: NextFunction): Response | void {
    const schema = Joi.object({
      description: Joi.string().min(3).max(100).required().messages({
        'string.base': '"description" deve ser um texto',
        'string.min': '"description" deve ser no mínimo 3 caracteres',
        'string.max': '"description" deve ser no máximo 100 caracteres',
        'string.empty': '"description" não pode ser vazio',
        'any.required': '"description" é obrigatório',
      }),
      value: Joi.number().strict().required().messages({
        'number.base': '"value" deve ser um numero decimal',
        'number.empty': '"value" não pode ser vazio',
        'any.required': '"value" é obrigatório',
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
