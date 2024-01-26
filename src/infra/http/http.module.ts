import { Module } from '@nestjs/common';
import { DatabaseModule } from '../database/database.module';
import { TefController } from './controllers/tef.controller';
import { SetTef } from '@app/use-cases/set-tef';
import { GetTef } from '@app/use-cases/get-tef';
import { TefService } from './services/tef.service';

@Module({
	imports: [DatabaseModule],
	controllers: [TefController],
	providers: [SetTef, GetTef, TefService],
})
export class HttpModule {}
