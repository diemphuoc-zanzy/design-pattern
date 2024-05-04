import { Module } from '@nestjs/common';
import { StrategyPatternController } from './BehavioralPatterns/strategy-pattern/strategy-pattern.controller';
import { StrategyPatternService } from './BehavioralPatterns/strategy-pattern/strategy-pattern.service';
import { StrategyPatternModule } from './BehavioralPatterns/strategy-pattern/strategy-pattern.module';

@Module({
  imports: [StrategyPatternModule],
  controllers: [StrategyPatternController],
  providers: [StrategyPatternService],
})
export class AppModule {}
