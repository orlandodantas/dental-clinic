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
      return res.status(StatusCodes.BAD_REQUEST).json({ message: error.message });
    }

    req.body.date = new Date(req.body.date).toISOString();

    next();
  }

  public static verifyReceivables(
    req: Request,
    res: Response,
    next: NextFunction,
  ): Response | void {
    const schema = Joi.object({
      dateInitial: Joi.date().iso().required().messages({
        'date.base': '"dateInitial" deve ser um data no formato 2022-09-12T18:33:42.775Z',
        'date.empty': '"dateInitial" não pode ser vazio',
        'any.required': '"dateInitial" é obrigatório',
      }),
      dateEnd: Joi.date().iso().required().messages({
        'date.base': '"dateEnd" deve ser um data no formato 2022-09-12T18:33:42.775Z',
        'date.empty': '"dateEnd" não pode ser vazio',
        'any.required': '"dateEnd" é obrigatório',
      }),
    });

    const { error } = schema.validate(req.body);

    if (error) {
      return res.status(StatusCodes.BAD_REQUEST).json({ message: error.message });
    }

    req.body.dateInitial = new Date(req.body.dateInitial).toISOString();
    req.body.dateEnd = new Date(req.body.dateEnd).toISOString();

    next();
  }
}
