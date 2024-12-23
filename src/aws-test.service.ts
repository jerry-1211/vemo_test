// import { Injectable } from '@nestjs/common';
// import { createConnection } from 'mysql2/promise';
// import { S3Client, PutObjectCommand } from '@aws-sdk/client-s3';
// import * as dotenv from 'dotenv';

// dotenv.config(); // .env 파일 로드

// @Injectable()
// export class AwsTestService {
//   private s3 = new S3Client({
//     region: process.env.AWS_REGION,
//     credentials: {
//       accessKeyId: process.env.AWS_ACCESS_KEY_ID,
//       secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
//     },
//   });

//   // RDS 연결 및 간단한 쿼리 실행
//   async testRdsQuery() {
//     try {
//       const connection = await createConnection({
//         host: process.env.DATABASE_HOST,
//         user: process.env.DATABASE_USERNAME,
//         password: process.env.DATABASE_PASSWORD,
//         database: process.env.DATABASE_NAME,
//         port: Number(process.env.DATABASE_PORT) || 3306,
//       });

//       const [rows] = await connection.query('SHOW TABLES');
//       console.log('✅ Tables in RDS:', rows);

//       await connection.end();
//     } catch (error) {
//       console.error('❌ Error executing RDS query:', error);
//     }
//   }

//   // S3에 파일 업로드
//   async uploadToS3() {
//     try {
//       const bucketName = process.env.AWS_S3_BUCKET;
//       const fileKey = `test-upload-${Date.now()}.txt`;
//       const fileContent = 'Hello, this is a test file for S3 upload!';

//       const command = new PutObjectCommand({
//         Bucket: bucketName,
//         Key: fileKey,
//         Body: fileContent,
//         ContentType: 'text/plain',
//       });

//       await this.s3.send(command);
//       console.log(
//         `✅ File uploaded to S3 bucket '${bucketName}' with key '${fileKey}'`,
//       );
//     } catch (error) {
//       console.error('❌ Error uploading to S3:', error);
//     }
//   }

//   // 테스트 실행
//   async runTests() {
//     console.log('🚀 Starting AWS tests...');
//     try {
//       if (!process.env.AWS_REGION || !process.env.AWS_S3_BUCKET) {
//         throw new Error(
//           '❌ AWS_REGION or AWS_S3_BUCKET is not defined in environment variables.',
//         );
//       }

//       if (!process.env.DATABASE_HOST || !process.env.DATABASE_USERNAME) {
//         throw new Error(
//           '❌ RDS credentials are missing in environment variables.',
//         );
//       }

//       await this.testRdsQuery();
//       await this.uploadToS3();
//       console.log('✅ AWS tests completed.');
//     } catch (error) {
//       console.error(error.message);
//     }
//   }
// }

import { Injectable } from '@nestjs/common';

@Injectable()
export class AwsTestService {
  runTests(): void {
    console.log('AWS 테스트 실행 중...');
    // 여기에 S3/RDS 연결 테스트 코드 추가 가능
  }
}
