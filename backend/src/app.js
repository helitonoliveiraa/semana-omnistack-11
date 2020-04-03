import express from 'express';
import cors from 'cors';
import { errors } from 'celebrate';

import routes from './routes';

const app = express();

app.use(cors());
app.use(express.json());
app.use(routes);
app.use(errors());

export default app;

/**
 * config para quando a aplicação vai para produção
 * limita qual enreço vai poder acessar a aplicação
 *
 * app.use(cors({
 * origin: 'endereço que vai poder acessar a aplicação'
 * }));
 */
