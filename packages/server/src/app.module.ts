import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common';
import { GenshionHomeModule } from './module/genshion-home/genshion-home.module';
import cors from "cors";
import { GenshionNewsModule } from './module/genshion-news/genshion-news.module';
/**
 * @internal AppModule类似于root module, 它会融合多个模块来共同组成功能
 */
@Module({
  imports: [GenshionHomeModule, GenshionNewsModule],
  exports: [GenshionHomeModule, GenshionNewsModule],
})
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
      // consumer.apply(cors());
  }
}