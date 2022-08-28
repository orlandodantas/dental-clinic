import cors from 'cors';
import express from 'express';
import { CatchError } from './middleware';

export default class App {
  public app: express.Express;

  constructor() {
    this.app = express();
    this.middleware();
  }

  private middleware(): void {
    this.app.use(express.json).use(cors);
    this.app.use(CatchError.error);
  }

  public start(PORT: number): void {
    this.app.listen(PORT, () => console.info(`O server está rodando na porta: ${PORT}`));
  }
}
