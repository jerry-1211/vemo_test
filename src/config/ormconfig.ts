import { TypeOrmModuleOptions } from '@nestjs/typeorm';
import * as dotenv from 'dotenv';
import * as path from 'path';

// .env 파일 강제 로드
dotenv.config({ path: path.resolve(__dirname, '../../.env') });

export const typeOrmConfig: TypeOrmModuleOptions = {
  type: process.env.DATABASE_TYPE as 'mysql', // undefined 방지
  host: process.env.DATABASE_HOST,
  port: parseInt(process.env.DATABASE_PORT, 10) || 3306,
  username: process.env.DATABASE_USERNAME,
  password: process.env.DATABASE_PASSWORD,
  database: process.env.DATABASE_NAME,
  entities: [__dirname + '/../**/*.entity.{js,ts}'],
  synchronize: true,
};
