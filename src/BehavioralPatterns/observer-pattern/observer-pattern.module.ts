import { Module } from '@nestjs/common';
import { ObserverPatternController } from './observer-pattern.controller';
import { ObserverPatternService } from './observer-pattern.service';

@Module({
  controllers: [ObserverPatternController],
  providers: [ObserverPatternService],
})
export class ObserverPatternModule {}
