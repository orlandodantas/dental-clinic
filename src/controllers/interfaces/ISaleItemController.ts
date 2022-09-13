import { Request, Response } from 'express';
import IGenericController from './IGenericController';

export default interface ISaleItemController extends IGenericController {
  getBySale(req: Request, res: Response): Promise<void>;
}
