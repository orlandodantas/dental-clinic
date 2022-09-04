import { NextFunction, Request, Response } from 'express';

export default class Pagination {
  public static create(req: Request, res: Response, next: NextFunction): void {
    const { page, limit } = req.query;

    const quantityRecords = Number(limit) && Number(limit) >= 10 ? Number(limit) : 25;

    const skip = Number(page) && Number(page) > 1 ? Number(page) * quantityRecords : 0;

    req.pagination = {
      skip,
      limit: quantityRecords,
    };

    next();
  }
}
