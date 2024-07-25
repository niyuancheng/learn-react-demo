import { Module } from "@nestjs/common";
import { GenshionHomeService } from "./genshion-home.service";
import { GenshionHomeController } from "./genshion-home.controller";

@Module({
    providers: [GenshionHomeService],
    controllers: [GenshionHomeController]
})
export class GenshionHomeModule {}