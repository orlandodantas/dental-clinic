export default interface IGenericModel<T> {
  getAll(skip: number, limit: number): Promise<T[]>;
  getByID(id: string): Promise<T | null>;
  create(user: T): Promise<T>;
  update(id: string, user: T): Promise<T>;
  delete(id: string): Promise<void>;
}
