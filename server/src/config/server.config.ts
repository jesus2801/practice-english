import { makeExecutableSchema } from 'graphql-tools';
import fastify, { FastifyInstance } from 'fastify';
import helmet from 'fastify-helmet';
import mercurius from 'mercurius';
import cors from 'fastify-cors';

import {
  errorController,
  handlerErrors,
  notFoundController,
} from '@utils/handler.errors';

import resolvers from '@graphql/resolvers';
import schema from '@graphql/schema';

import { initConn } from './db.config';

/**
 * Clase que inicializa el servidor
 */
export class App {
  private app: FastifyInstance;
  private port: number;

  constructor(port?: number) {
    this.app = fastify({
      logger: process.env.NODE_ENV !== 'production',
      trustProxy: process.env.NODE_ENV === 'production',
    });
    this.port = port || parseInt(process.env.PORT!);

    this.middlewares();
    this.handlers();
  }

  private middlewares() {
    this.app.register(cors, {
      methods: ['POST', 'PUT', 'DELETE', 'OPTIONS'],
      optionsSuccessStatus: 204,
    });

    this.app.register(mercurius, {
      schema: makeExecutableSchema({
        typeDefs: schema,
        resolvers,
      }),
      graphiql: process.env.NODE_ENV !== 'production',
    });

    if (process.env.NODE_ENV === 'production') this.app.register(helmet);
    else
      this.app.get('/', ({}, reply) => {
        reply.send('');
      });
  }

  public handlers() {
    this.app.setErrorHandler(errorController);
    this.app.setNotFoundHandler(notFoundController);
  }

  public async listen() {
    try {
      await initConn();
      await this.app.listen(this.port, '0.0.0.0');
    } catch (e) {
      handlerErrors(e, true);
    }
  }
}
