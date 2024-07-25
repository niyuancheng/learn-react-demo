import { AppService } from './app.service';
import type { Request, Response } from "express";
export declare class AppController {
    private readonly appService;
    constructor(appService: AppService);
    getAll(): string;
    getName(): string;
    getHello(request: Request): string;
    getBlog(params: any, request: Request, response: Response): void;
}
