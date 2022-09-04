import { NextFunction, Request, Response } from 'express';
import { UnauthorizedError } from 'restify-errors';
import { JWTAuthenticate } from '../utils';

export default class Authorization {
  public static authenticate(req: Request, res: Response, next: NextFunction): void {
    const { authorization: token } = req.headers;

    if (!token) throw new UnauthorizedError('Necessário passar o token Authorization');

    req.login = JWTAuthenticate.verifyToken(token as string);

    next();
  }
}
