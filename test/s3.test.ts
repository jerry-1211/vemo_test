import { S3 } from 'aws-sdk';
import * as dotenv from 'dotenv';

dotenv.config();

async function testS3Connection() {
  try {
    const s3 = new S3({
      region: 'ap-northeast-2',
    });

    // 버킷 리스트 가져오기 테스트
    const buckets = await s3.listBuckets().promise();
    console.log('S3 연결 성공! 사용 가능한 버킷:', buckets.Buckets);
  } catch (error) {
    console.error('S3 연결 실패:', error);
  }
}

testS3Connection();
