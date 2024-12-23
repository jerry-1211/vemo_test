import {
  Controller,
  Post,
  UploadedFile,
  UseInterceptors,
} from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';
import { S3Service } from './s3.service';

@Controller()
export class AppController {
  constructor(private readonly s3Service: S3Service) {}

  @Post('upload')
  @UseInterceptors(FileInterceptor('file')) // 파일 인터셉터
  async uploadFile(@UploadedFile() file: Express.Multer.File): Promise<string> {
    const uploadedUrl = await this.s3Service.uploadFile(file);
    return `파일 업로드 완료: ${uploadedUrl}`;
  }
}
