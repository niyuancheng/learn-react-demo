import { Blog } from "./utils/blog-list";
export declare class AppService {
    getHello(): string;
    getName(): string;
    getBlogById(id: string | number): Blog[];
}
