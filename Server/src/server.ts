import express from 'express';
import { ApolloServer } from 'apollo-server-express';
import depthLimit from 'graphql-depth-limit';
import { createServer } from 'http';
import cors from 'cors';
import schema from './schema';

const corsOptions = {
  origin: 'http://localhost:3000',
  credentials: true,
}

const app = express();
const server = new ApolloServer({
  schema,
  validationRules: [depthLimit(7)],
});

app.use('*',cors(corsOptions));

server.applyMiddleware({app});

const httpServer = createServer(app);
httpServer.listen({port: 8000},
  (): void => console.log('Server listening on port 8000'));
