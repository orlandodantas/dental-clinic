import cors from 'cors';
import express from 'express';
import { CatchError } from './middleware';
import { LoginRouter, PatientRouter, ServiceRouter, UserRouter } from './routers';

export default class App {
  public app: express.Express;

  constructor() {
    this.app = express();
    this.middleware();
  }

  private middleware(): void {
    // Middleware Libs
    this.app.use(express.json()).use(cors());

    // Rotas
    this.app
      .use('/users', new UserRouter().route)
      .use('/login', new LoginRouter().route)
      .use('/patients', new PatientRouter().route)
      .use('/services', new ServiceRouter().route);

    // Middleware de Error
    this.app.use(CatchError.error);
  }

  public start(PORT: number): void {
    this.app.listen(PORT, () => console.info(`O server está rodando na porta: ${PORT}`));
  }
}
