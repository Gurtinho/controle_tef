import { SetTef } from '@app/use-cases/set-tef';
import { DatabaseModule } from '@infra/database/database.module';
import { Module } from '@nestjs/common';
import { TefController } from './kafka/controllers/tef.controller';
import { KafkaConsumerService } from './kafka/kafka-consumer.service';

@Module({
	imports: [DatabaseModule],
	providers: [KafkaConsumerService, SetTef],
	controllers: [TefController],
})
export class comunicationModule {}
