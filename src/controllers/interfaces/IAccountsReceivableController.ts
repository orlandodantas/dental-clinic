import { Request, Response } from 'express';
import IGenericController from './IGenericController';

export default interface IAccountsReceivableController extends IGenericController {
  patchReceive(req: Request, res: Response): Promise<void>;
  getByReceived(req: Request, res: Response): Promise<void>;
  getByReceive(req: Request, res: Response): Promise<void>;
}
