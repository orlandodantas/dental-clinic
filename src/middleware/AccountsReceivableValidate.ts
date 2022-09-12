/* eslint-disable @typescript-eslint/naming-convention */
import { NextFunction, Request, Response } from 'express';
import { StatusCodes } from 'http-status-codes';
import Joi from 'joi';

export default class AccountsReceivableValidate {
  public static verify(req: Request, res: Response, next: NextFunction): Response | void {
    const schema = Joi.object({
      date: Joi.date().iso().required().messages({
        'date.base': '"date" deve ser um data no formato 2022-09-12T18:33:42.775Z',
        'date.empty': '"date" não pode ser vazio',
        'any.required': '"date" é obrigatório',
      }),
    });

    const { error } = schema.validate(req.body);

    if (error) {
      console.error(error);
      return res.status(StatusCodes.BAD_REQUEST).json({ message: error.message });
    }

    req.body.date = new Date(req.body.date).toISOString();

    next();
  }
}
