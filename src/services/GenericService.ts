import { NotFoundError } from 'restify-errors';
import { IGenericModel } from '../models/interfaces';
import { IGenericService } from './interfaces';

export default abstract class GenericService<T> implements IGenericService<T> {
  private _model: IGenericModel<T>;

  constructor(connection: IGenericModel<T>) {
    this._model = connection;
  }

  public async getAll(skip: number, limit: number): Promise<T[]> {
    return this._model.getAll(skip, limit);
  }

  public async getByID(id: string): Promise<T> {
    const entityData = await this._model.getByID(id);

    if (!entityData) throw new NotFoundError('Nem um item foi encontrado com o "ID" passado!');

    return entityData;
  }

  public async create(entity: T): Promise<T> {
    return this._model.create(entity);
  }

  public async update(id: string, entity: T): Promise<T> {
    await this.getByID(id);

    return this._model.update(id, entity);
  }

  public async delete(id: string): Promise<void> {
    await this.getByID(id);

    this._model.delete(id);
  }
}
