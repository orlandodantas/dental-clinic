import { Router } from 'express';
import { PatientFactory } from '../factories';
import { Authorization, Pagination, PatientValidate } from '../middleware';

export default class PatientRouter {
  public route: Router;

  constructor() {
    this.route = Router();

    this.router();
  }

  private router(): void {
    const patientController = PatientFactory.create();

    this.route
      .get('/', Authorization.authenticate, Pagination.create, patientController.getAll)
      .get('/:id', Authorization.authenticate, patientController.getById)
      .post('/', Authorization.authenticate, PatientValidate.verify, patientController.create)
      .put('/:id', Authorization.authenticate, PatientValidate.verify, patientController.update)
      .delete('/:id', Authorization.authenticate, patientController.delete);
  }
}
