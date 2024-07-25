import { Module } from '@nestjs/common';
import { GenshionHomeModule } from './module/genshion-home/genshion-home.module';

@Module({
  imports: [GenshionHomeModule],
})
export class AppModule {}
