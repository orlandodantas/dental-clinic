import { Router } from 'express';
import { PatientFactory } from '../factories';
import Pagination from '../middleware/Pagination';
import UserMiddleware from '../middleware/UserMiddleware';

export default class PatientRouter {
  public route: Router;

  constructor() {
    this.route = Router();

    this.router();
  }

  private router(): void {
    const patientController = PatientFactory.create();

    this.route
      .get('/', Pagination.create, patientController.getAll)
      .get('/:id', patientController.getById)
      .post('/', UserMiddleware.verifyCreate, patientController.create)
      .put('/:id', UserMiddleware.verifyUpdate, patientController.update)
      .delete('/:id', patientController.delete);
  }
}
