import { Module } from '@nestjs/common';
import { FacadePatternService } from './facade-pattern.service';
import { FacadePatternController } from './facade-pattern.controller';

@Module({
  providers: [FacadePatternService],
  controllers: [FacadePatternController]
})
export class FacadePatternModule {}
