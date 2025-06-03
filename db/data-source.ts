import { DataSource, DataSourceOptions } from 'typeorm';
import * as dotenv from 'dotenv';

dotenv.config(); // Loading environment variables from .env file
if (
  !process.env.DB_HOST ||
  !process.env.DB_USER ||
  !process.env.DB_PASSWORD ||
  !process.env.DB_NAME
) {
  throw new Error(
    'Missing required environment variables for database connection.',
  );
}

export const dataSourceOptions: DataSourceOptions = {
  type: 'postgres',
  host: process.env.DB_HOST,
  port: parseInt(process.env.DB_PORT || '5432'),
  username: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
  entities: [], // e.g., [User, Product]
  migrations: [], //e.g., ['dist/migrations/*.js']
  logging: process.env.DB_LOGGING === 'true',
  synchronize: process.env.DB_SYNC === 'false',
};

const dataSource = new DataSource(dataSourceOptions);
export default dataSource;
