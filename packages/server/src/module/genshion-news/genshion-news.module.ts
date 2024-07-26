import { Module } from "@nestjs/common";
import { GenshionNewsService } from "./genshion-news.service";
import { GenshionNewsController } from "./genshion-news.controller";

@Module({
    providers: [GenshionNewsService],
    controllers: [GenshionNewsController]
})
export class GenshionNewsModule {}