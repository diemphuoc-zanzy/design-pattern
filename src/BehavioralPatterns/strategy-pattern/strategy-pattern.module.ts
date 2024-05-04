import { Module } from '@nestjs/common';
import { StrategyPatternService } from './strategy-pattern.service';

@Module({
  imports: [StrategyPatternService],
})
export class StrategyPatternModule {}
