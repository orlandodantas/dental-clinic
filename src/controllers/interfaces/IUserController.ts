import { Request, Response } from 'express';
import IGenericController from './IGenericController';

export default interface IUserController extends IGenericController {
  login(req: Request, res: Response): Promise<void>;
}
