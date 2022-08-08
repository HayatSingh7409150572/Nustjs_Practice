import { Body, Controller, Get, Post } from '@nestjs/common';
import { BlogsService } from 'src/blogs/blogs.service';

@Controller('users')
export class UsersController {
  constructor(private blogService: BlogsService) {}

  @Get()
  find() {
    return 'Hayat';
  }

  @Get('history')
  userHistory(): object {
    return { id: 1, text: 'HHSHDDDHSHDH' };
  }

  @Get('blog-list')
  async blogList(): Promise<any[]> {
    return this.blogService.findData();
  }

  @Post('blog-add')
  blogAdd(@Body() record: any) {
    this.blogService.create(record);
  }
}
