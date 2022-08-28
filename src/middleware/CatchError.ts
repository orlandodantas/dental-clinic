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
    if (err.name === 'JsonWebTokenError' || err.name === 'TokenExpiredError') {
      return res.status(StatusCodes.UNAUTHORIZED).json({
        message: 'Token inválido ou expirado',
      });
    }

    if (err.statusCode) return res.status(err.statusCode).json(err.message);

    console.error(err);
    return res
      .status(StatusCodes.INTERNAL_SERVER_ERROR)
      .json(
        'Erro interno no servidor! Estamos trabalhando para resolver isto o mais rápido possível',
      );
  }
}
