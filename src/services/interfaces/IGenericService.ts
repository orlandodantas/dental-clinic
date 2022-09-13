export default interface IGenericService<T> {
  getAll(skip: number, limit: number): Promise<T[]>;
  getByID(id: string): Promise<T>;
  create(entity: T): Promise<T>;
  update(id: string, entity: T): Promise<T>;
  delete(id: string): Promise<void>;
}
