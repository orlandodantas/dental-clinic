import { Request, Response } from 'express';
import { StatusCodes } from 'http-status-codes';
import { IGenericService } from '../services/interfaces';
import { IGenericController } from './interfaces';

export default class GenericController<T> implements IGenericController {
  private _service: IGenericService<T>;

  constructor(service: IGenericService<T>) {
    this._service = service;

    this.getAll = this.getAll.bind(this);
    this.getById = this.getById.bind(this);
    this.create = this.create.bind(this);
    this.update = this.update.bind(this);
    this.delete = this.delete.bind(this);
  }

  public async getAll(req: Request, res: Response): Promise<void> {
    const { skip, limit } = req.pagination;

    const entities = await this._service.getAll(skip, limit);

    res.status(StatusCodes.OK).json(entities);
  }

  public async getById(req: Request, res: Response): Promise<void> {
    const { id } = req.params;

    const entity = await this._service.getByID(id);

    res.status(StatusCodes.OK).json(entity);
  }

  public async create(req: Request, res: Response): Promise<void> {
    const entity = await this._service.create(req.body);

    res.status(StatusCodes.CREATED).json(entity);
  }

  public async update(req: Request, res: Response): Promise<void> {
    const { id } = req.params;

    const entity = await this._service.update(id, req.body);

    res.status(StatusCodes.OK).json(entity);
  }

  public async delete(req: Request, res: Response): Promise<void> {
    const { id } = req.params;

    await this._service.delete(id);

    res.status(StatusCodes.NO_CONTENT).end();
  }
}
