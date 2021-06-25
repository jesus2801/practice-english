import { connect } from 'mongoose';

import { handlerErrors } from '@utils/handler.errors';
import { logger } from './logger.config';

export const initConn = async () => {
  try {
    //me conecto a mongo por medio de la uri predefinida en los .env
    await connect(process.env.MONGO_URI!, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useFindAndModify: false,
      useCreateIndex: true,
    });

    logger.info('MongoDB is conected');
  } catch (e) {
    // si hay un error lo paso al manejador y me salgo
    handlerErrors(e, true);
  }
};
