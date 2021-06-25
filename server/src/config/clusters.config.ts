import { MasterConfig } from '@interfaces/index';

import { logger } from '@config/logger.config';

class Master {
  private cluster: any;
  private config: MasterConfig;

  constructor(config: MasterConfig) {
    this.config = config || {};
    this.cluster = this.config.cluster;
  }

  public levantarWorker(): void {
    const worker = this.cluster.fork();
    logger.info(`Worker ${worker.id} is running`);
  }

  public levantarWorkerMuerto(): void {
    // Esperamos unos milisegundos para levantar de nuevo un worker
    setTimeout(() => {
      this.levantarWorker();
    }, 300);
  }
}

export default Master;
