import JWT from 'jsonwebtoken';
import { UnauthorizedError } from 'restify-errors';
import { Payload } from '../types';

export default class JWTAuthenticate {
  public static createToken(payload: Payload): string {
    const jwtOptions: JWT.SignOptions = {
      expiresIn: '1d',
      algorithm: 'HS256',
    };

    const { JWT_SECRET } = process.env;

    return JWT.sign(payload, JWT_SECRET as string, jwtOptions);
  }

  public static verifyToken(token: string): Payload {
    const { JWT_SECRET } = process.env;

    try {
      return JWT.verify(token, JWT_SECRET as string) as Payload;
    } catch (error) {
      if (error instanceof JWT.TokenExpiredError) {
        throw new UnauthorizedError('Token JWT Expirado!');
      }

      throw new UnauthorizedError('Token JWT Inválido!');
    }
  }
}
