import express, { response } from 'express';
import cors from 'cors';
import path from 'path';
import routes from './routes';

// O express não trás junto a definição de tipos no pacote
// Precisamos instalar uma dependência para colocar tipagem no express 

const app = express();

app.use(cors());
app.use(express.json());
app.use(routes);

app.use('/uploads', express.static(path.resolve(__dirname, '..', 'uploads')));


app.listen(3333);