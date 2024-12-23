import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { AwsTestService } from './aws-test.service';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  // AWS 테스트 실행
  const awsTestService = app.get(AwsTestService);
  await awsTestService.runTests();

  // 서버 시작
  await app.listen(3000); // 3000 포트에서 서버 실행
}
bootstrap();
