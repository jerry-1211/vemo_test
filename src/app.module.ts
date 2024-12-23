import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './user/user.module';
import { S3Service } from './s3.service';
import { typeOrmConfig } from './config/ormconfig';

// .env 값 로그 확인
console.log('DATABASE_TYPE:', process.env.DATABASE_TYPE);
console.log('DATABASE_HOST:', process.env.DATABASE_HOST);
console.log('DATABASE_NAME:', process.env.DATABASE_NAME);

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    TypeOrmModule.forRoot(typeOrmConfig),
    UserModule,
  ],
  controllers: [AppController],
  providers: [AppService, S3Service],
})
export class AppModule {}
