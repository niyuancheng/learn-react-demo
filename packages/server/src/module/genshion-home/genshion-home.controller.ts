import { Controller, Get, Header, HttpCode, Query, Req, Res } from "@nestjs/common";
import { GenshionHomeService } from "./genshion-home.service";
import type { Request, Response } from "express";

@Controller('genshion-home')
export class GenshionHomeController {
    constructor(private readonly genshionService: GenshionHomeService) {}

    @Get('/news')
    @HttpCode(200)
    @Header('Access-Control-Allow-Origin', '*')
    async getNewsList(@Query('pageSize') pageSize: number, @Query('page') page: number, @Req() req: Request, @Res() res: Response) {
        const list = await this.genshionService.getData(page, pageSize);
        res.json({
            code: 200,
            val: list
        })
    }
}