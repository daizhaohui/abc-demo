import ResponseEntity from './response.entity';
import ResponseUtil from './responseUtil';
import appConfig from 'src/app.config';
import { env } from 'node:process';
export interface IDbConfig {
  type: string;
  host: string;
  port: number;
  username: string;
  password: string;
  database: string;
  [key:string]: string | number | string[] | boolean
}

export interface IS3Config {
  bucket: string,
  accessKeyId: string,
  secretAccessKey: string
  [key:string]: string | number | string[] | boolean
}

export interface IResponsePagingEntity<T> {
  current: number;
  total: number;
  pageSize: number;
  data: T[];
}

export interface IRequestPageEntity<T> {
  current: number;
  pageSize: number;
  params: T;
}

export { ResponseEntity, ResponseUtil };

export function getDbConfig(): IDbConfig {
  const db = {
    ...appConfig.db
  }
  if(process.env.ENV_DB_HOST) {
    db.host = process.env.ENV_DB_HOST;
  }
  if(process.env.ENV_DB_TYPE) {
    db.type = process.env.ENV_DB_TYPE;
  }
  if(process.env.ENV_DB_DATABASE) {
    db.database = process.env.ENV_DB_DATABASE;
  }
  if(process.env.ENV_DB_USERNAME) {
    db.username = process.env.ENV_DB_USERNAME;
  }
  if(process.env.ENV_DB_PASSWORD) {
    db.password = process.env.ENV_DB_PASSWORD;
  }
  return db;
}

export function getS3Config(): IS3Config {
  const s3 = {
    ...appConfig.aws.s3
  }
  if(process.env.ENV_S3_BUCKET) {
    s3.bucket = process.env.ENV_S3_BUCKET;
  }
  if(process.env.ENV_S3_ID) {
    s3.accessKeyId = process.env.ENV_S3_ID;
  }
  if(process.env.ENV_S3_KEY) {
    s3.secretAccessKey = process.env.ENV_S3_KEY;
  }
  return s3;
}