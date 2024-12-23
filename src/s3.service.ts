import { Injectable } from '@nestjs/common';
import { S3 } from 'aws-sdk';

@Injectable()
export class S3Service {
  private s3: S3;

  constructor() {
    this.s3 = new S3({
      accessKeyId: process.env.AWS_ACCESS_KEY_ID,
      secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
      region: process.env.AWS_REGION,
    });
  }

  async uploadFile(file: Express.Multer.File): Promise<string> {
    const uploadParams = {
      Bucket: process.env.AWS_S3_BUCKET,
      Key: `${Date.now()}-${file.originalname}`,
      Body: file.buffer, // 파일 버퍼 업로드
      ContentType: file.mimetype,
    };

    const result = await this.s3.upload(uploadParams).promise();
    return result.Location; // 업로드된 파일 URL 반환
  }
}
