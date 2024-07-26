import { Controller, Get, Header, HttpCode, Query, Req, Res } from "@nestjs/common";
import { GenshionNewsService } from "./genshion-news.service";
import type { Request, Response } from "express";

@Controller('genshion-news')
export class GenshionNewsController {
    constructor(private readonly service: GenshionNewsService) {}

    @Get('item')
    @HttpCode(200)
    @Header('Access-Control-Allow-Origin', '*')
    async getContentByNewsId(@Query('id') id: number, @Req() request: Request, @Res() response: Response) {
        const res = await this.service.getData(id);

        response.json({
            code: 200,
            val: res
        });
    }
}