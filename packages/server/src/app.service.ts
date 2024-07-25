import { Injectable } from '@nestjs/common';
import { Blog, blogList } from "./utils/blog-list";
@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World!';
  }

  getName(): string {
    return 'it is genshion game!';
  }

  getBlogById(id: string | number): Blog[] {
    return blogList.filter(item => item.id === id) || [];
  }
}
