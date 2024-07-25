import { Controller, Get, HttpCode, Param, Post, Redirect, Req, Res } from '@nestjs/common';
import { AppService } from './app.service';
import type { Request, Response } from "express";

@Controller('genshion')
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get('redirect')
  @Redirect('https://www.bilibili.com')
  getAll() {
    return 'this is genshion'
  }

  @Get('name')
  @HttpCode(201)
  getName() {
    return this.appService.getName();
  }

  @Get('hello')
  getHello(@Req() request: Request): string {
    console.log(request);
    return this.appService.getHello();
  }  

  @Get('/blog/:id')
  getBlog(@Param() params: any, @Req() request: Request, @Res() response: Response) {
    const id = params.id;
    if (!id) response.json({
      code: 404,
      value: 'Resource Not Found!'
    })
    response.json({
      code: 200,
      value: this.appService.getBlogById(id)
    })
  }
}
