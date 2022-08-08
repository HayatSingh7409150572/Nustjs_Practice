import { Controller, Get } from '@nestjs/common';

@Controller('users')
export class UsersController {
  @Get()
  find() {
    return 'Hayat';
  }

  @Get('history')
  userHistory(): object {
    return { id: 1, text: 'HHSHDDDHSHDH' };
  }

  @Get('blog-list')
  blogList() {
    return ' aaaaaa ';
  }
}
