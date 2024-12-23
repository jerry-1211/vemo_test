import { createConnection } from 'typeorm';
import * as dotenv from 'dotenv';

dotenv.config();

async function testDatabaseConnection() {
  try {
    const connection = await createConnection({
      type: 'mysql',
      host: process.env.DATABASE_HOST,
      port: parseInt(process.env.DATABASE_PORT),
      username: process.env.DATABASE_USERNAME,
      password: process.env.DATABASE_PASSWORD,
      database: process.env.DATABASE_NAME,
    });

    console.log('데이터베이스 연결 성공!');
    await connection.close();
  } catch (error) {
    console.error('데이터베이스 연결 실패:', error);
  }
}

testDatabaseConnection();
