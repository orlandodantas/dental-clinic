/* eslint-disable @typescript-eslint/naming-convention */
import { NextFunction, Request, Response } from 'express';
import { StatusCodes } from 'http-status-codes';
import Joi from 'joi';

export default class SaleValidate {
  public static verifyCreate(req: Request, res: Response, next: NextFunction): Response | void {
    const schema = Joi.object({
      patientId: Joi.string().required().messages({
        'string.base': '"patientId" deve ser um texto',
        'string.empty': '"patientId" não pode ser vazia',
        'any.required': '"patientId" é obrigatório',
      }),
      totalValue: Joi.number().strict().required().messages({
        'number.base': '"totalValue" deve ser um numero decimal',
        'number.empty': '"totalValue" não pode ser vazio',
        'any.required': '"totalValue" é obrigatório',
      }),
      saleItem: Joi.array()
        .items(
          Joi.object({
            quantity: Joi.number().integer().strict().required().messages({
              'number.base': '"quantity" deve ser um numero inteiro',
              'number.empty': '"quantity" não pode ser vazio',
              'any.required': '"quantity" é obrigatório',
            }),
            value: Joi.number().strict().required().messages({
              'number.base': '"value" deve ser um numero decimal',
              'number.empty': '"value" não pode ser vazio',
              'any.required': '"value" é obrigatório',
            }),
            serviceId: Joi.string().required().messages({
              'string.base': '"serviceId" deve ser um texto',
              'string.empty': '"serviceId" não pode ser vazia',
              'any.required': '"serviceId" é obrigatório',
            }),
          }),
        )
        .required()
        .messages({
          'array.base': '"saleItem" deve ser um array',
          'array.empty': '"saleItem" não pode ser vazio',
          'any.required': '"saleItem" é obrigatório',
        }),
      accountsReceivable: Joi.array()
        .items(
          Joi.object({
            expirationDate: Joi.date().iso().required().messages({
              'date.base': '"expirationDate" deve ser um data no formato AAAA-MM-DD',
              'date.empty': '"expirationDate" não pode ser vazio',
              'any.required': '"expirationDate" é obrigatório',
            }),
            value: Joi.number().strict().required().messages({
              'number.base': '"value" deve ser um numero decimal',
              'number.empty': '"value" não pode ser vazio',
              'any.required': '"value" é obrigatório',
            }),
          }),
        )
        .required()
        .messages({
          'array.base': '"accountsReceivable" deve ser um array',
          'array.empty': '"accountsReceivable" não pode ser vazio',
          'any.required': '"accountsReceivable" é obrigatório',
        }),
    });

    const { error } = schema.validate(req.body);

    if (error) {
      console.error(error);
      return res.status(StatusCodes.BAD_REQUEST).json({ message: error.message });
    }

    type account = {
      expirationDate: string;
    };

    req.body.accountsReceivable.forEach((item: account) => {
      // eslint-disable-next-line no-param-reassign
      item.expirationDate = new Date(item.expirationDate).toISOString();
    });

    next();
  }

  public static verifyUpdate(req: Request, res: Response, next: NextFunction): Response | void {
    const schema = Joi.object({
      patientId: Joi.string().required().messages({
        'string.base': '"patientId" deve ser um texto',
        'string.empty': '"patientId" não pode ser vazia',
        'any.required': '"patientId" é obrigatório',
      }),
      totalValue: Joi.number().strict().required().messages({
        'number.base': '"totalValue" deve ser um numero decimal',
        'number.empty': '"totalValue" não pode ser vazio',
        'any.required': '"totalValue" é obrigatório',
      }),
      saleItem: Joi.array()
        .items(
          Joi.object({
            id: Joi.string().required().allow('').messages({
              'string.base': '"saleItem.id" deve ser um texto',
              'any.required': '"saleItem.id" é obrigatório',
            }),
            quantity: Joi.number().integer().strict().required().messages({
              'number.base': '"saleItem.quantity" deve ser um numero inteiro',
              'number.empty': '"saleItem.quantity" não pode ser vazio',
              'any.required': '"saleItem.quantity" é obrigatório',
            }),
            value: Joi.number().strict().required().messages({
              'number.base': '"saleItem.value" deve ser um numero decimal',
              'number.empty': '"saleItem.value" não pode ser vazio',
              'any.required': '"saleItem.value" é obrigatório',
            }),
            serviceId: Joi.string().required().messages({
              'string.base': '"saleItem.serviceId" deve ser um texto',
              'string.empty': '"saleItem.serviceId" não pode ser vazia',
              'any.required': '"saleItem.serviceId" é obrigatório',
            }),
          }),
        )
        .required()
        .messages({
          'array.base': '"saleItem" deve ser um array',
          'array.empty': '"saleItem" não pode ser vazio',
          'any.required': '"saleItem" é obrigatório',
        }),
      accountsReceivable: Joi.array()
        .items(
          Joi.object({
            id: Joi.string().required().allow('').messages({
              'string.base': '"accountsReceivable.id" deve ser um texto',
              'any.required': '"accountsReceivable.id" é obrigatório',
            }),
            expirationDate: Joi.date().iso().required().messages({
              'date.base':
                '"accountsReceivable.expirationDate" deve ser um data no formato AAAA-MM-DD',
              'date.empty': '"accountsReceivable.expirationDate" não pode ser vazio',
              'any.required': '"accountsReceivable.expirationDate" é obrigatório',
            }),
            value: Joi.number().strict().required().messages({
              'number.base': '"accountsReceivable.value" deve ser um numero decimal',
              'number.empty': '"accountsReceivable.value" não pode ser vazio',
              'any.required': '"accountsReceivable.value" é obrigatório',
            }),
          }),
        )
        .required()
        .messages({
          'array.base': '"accountsReceivable" deve ser um array',
          'array.empty': '"accountsReceivable" não pode ser vazio',
          'any.required': '"accountsReceivable" é obrigatório',
        }),
    });

    const { error } = schema.validate(req.body);

    if (error) {
      console.error(error);
      return res.status(StatusCodes.BAD_REQUEST).json({ message: error.message });
    }

    type account = {
      expirationDate: string;
    };

    req.body.accountsReceivable.forEach((item: account) => {
      // eslint-disable-next-line no-param-reassign
      item.expirationDate = new Date(item.expirationDate).toISOString();
    });

    next();
  }
}
