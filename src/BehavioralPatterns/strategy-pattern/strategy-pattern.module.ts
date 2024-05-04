import { Module } from '@nestjs/common';
import { StrategyPatternService } from './strategy-pattern.service';
import { StrategyPatternController } from './strategy-pattern.controller';

@Module({
  controllers: [StrategyPatternController],
  providers: [StrategyPatternService],
})
export class StrategyPatternModule {}
