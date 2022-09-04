import { NextFunction, Request, Response } from 'express';
import 'express-async-errors';
import { StatusCodes } from 'http-status-codes';
import { RestifyRestErrorOptions } from 'restify-errors';

export default class CatchError {
  public static error(
    err: RestifyRestErrorOptions,
    _req: Request,
    res: Response,
    _next: NextFunction,
  ): Response {
    if (err.statusCode) return res.status(err.statusCode).json({ message: err.message });

    console.error(err);
    return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
      message:
        'Erro interno no servidor! Estamos trabalhando para resolver isto o mais rápido possível',
    });
  }
}
