import { Module } from '@nestjs/common';
import { StrategyPatternModule } from './BehavioralPatterns/strategy-pattern/strategy-pattern.module';
import { ObserverPatternModule } from './BehavioralPatterns/observer-pattern/observer-pattern.module';
import { FacadePatternModule } from './StructuralPatterns/facade-pattern/facade-pattern.module';

@Module({
  imports: [StrategyPatternModule, ObserverPatternModule, FacadePatternModule],
})
export class AppModule {}
