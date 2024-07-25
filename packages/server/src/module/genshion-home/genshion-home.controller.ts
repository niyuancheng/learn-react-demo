import { Controller, Get } from "@nestjs/common";
import { GenshionHomeService } from "./genshion-home.service";

@Controller('genshion-home')
export class GenshionHomeController {
    constructor(private readonly genshionService: GenshionHomeService) {}

    @Get('/news')
    getNewsList() {
        return this.genshionService.getNewsList();
    }
}