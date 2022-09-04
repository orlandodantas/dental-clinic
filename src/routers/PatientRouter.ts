import { Router } from 'express';
import { PatientFactory } from '../factories';
import { Pagination, PatientValidate } from '../middleware';

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
      .post('/', PatientValidate.verify, patientController.create)
      .put('/:id', PatientValidate.verify, patientController.update)
      .delete('/:id', patientController.delete);
  }
}
