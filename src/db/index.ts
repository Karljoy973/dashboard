import pgPromise from 'pg-promise';
import { dbConfig } from './config';

const pgp = pgPromise();
const db = pgp(dbConfig);

export default db;
