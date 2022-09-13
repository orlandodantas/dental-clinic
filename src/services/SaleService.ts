import { BadRequestError, InternalServerError } from 'restify-errors';
import { ISaleModel } from '../models/interfaces';
import { SaleDTO, SaleItemDTO } from '../types';
import GenericService from './GenericService';
import { IPatientService, ISaleService, IServiceService } from './interfaces';

export default class SaleService extends GenericService<SaleDTO> implements ISaleService {
  private _saleModel: ISaleModel;
  private _patient!: IPatientService;
  private _service!: IServiceService;
  private _messageServerError =
    'Houve um problema em nosso servidor, estamos trabalhando para resolver o mais rápido possível.';

  constructor(model: ISaleModel) {
    super(model);
    this._saleModel = model;
  }

  public override async create(entity: SaleDTO): Promise<SaleDTO> {
    SaleService._verifySaleItem(entity);
    SaleService._verifyAccountsReceivable(entity);

    await this._verifyPatient(entity.patientId);
    await this._verifyService(entity.saleItem as SaleItemDTO[]);

    return super.create(entity);
  }

  public override async update(id: string, entity: SaleDTO): Promise<SaleDTO> {
    SaleService._verifySaleItem(entity);
    SaleService._verifyAccountsReceivable(entity);

    await this._verifyPatient(entity.patientId);
    await this._verifyService(entity.saleItem as SaleItemDTO[]);

    return super.update(id, entity);
  }

  private static _verifySaleItem(entity: SaleDTO): void {
    const totalValue = entity.saleItem?.reduce(
      (previousValue, currentValue) => previousValue + currentValue.value * currentValue.quantity,
      0.0,
    );

    if (totalValue !== entity.totalValue) {
      throw new BadRequestError(
        'O totalValue da venda precisa ser igual a soma da multiplicação do quantity pelo value do saleItem!',
      );
    }
  }

  private static _verifyAccountsReceivable(entity: SaleDTO): void {
    const totalValue = entity.accountsReceivable?.reduce(
      (previousValue, currentValue) => previousValue + currentValue.value,
      0.0,
    );

    if (totalValue !== entity.totalValue)
      throw new BadRequestError(
        'O totalValue da venda precisa ser igual a soma de todos os value de accountReceivable!',
      );
  }

  private async _verifyPatient(patientId: string): Promise<void> {
    if (!this._patient) {
      throw new InternalServerError(this._messageServerError);
    }

    await this._patient.getByID(patientId);
  }

  private async _verifyService(saleItem: SaleItemDTO[]): Promise<void> {
    if (!this._service) {
      throw new InternalServerError(this._messageServerError);
    }

    await Promise.all(
      saleItem.map(async ({ value, serviceId }) => {
        const saleItemData = await this._service.getByID(serviceId);

        if (saleItemData.value !== value) {
          throw new BadRequestError(
            `Valor informado em saleItem não confere com o valor do serviço de  ID: ${saleItemData.id}`,
          );
        }
      }),
    );
  }

  public set patient(patient: IPatientService) {
    this._patient = patient;
  }

  public set service(service: IServiceService) {
    this._service = service;
  }
}
