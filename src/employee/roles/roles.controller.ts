import {
  Body,
  Controller,
  Delete,
  Get,
  HttpCode,
  Param,
  Query,
} from '@nestjs/common';

@Controller('users')
export class RolesController {
  @Get()
  userInfo(): string {
    return 'USER PAGE';
  }

  @Delete('add-user')
  //@All('add-user')
  addUser(@Body() _record: any): string {
    console.log(_record, 'Yes RECORDED');
    return 'OK ADD USER';
  }

  @Get('lists/:id')
  @HttpCode(404)
  //@All('add-user')
  listUser(@Param() _record: any): string {
    console.log(_record, 'Yes RECORDED');
    return 'OK ADD USER' + _record.id;
  }
  @Get('list')
  //@HttpCode(404)
  listFilter(@Query() _record: any): string {
    console.log(_record, 'Yes RECORDED');
    return 'OK QUERY USER' + _record.id;
  }
  @Get('version*card')
  //@HttpCode(404)
  detailPage(): string {
    return 'OK QUERY USER';
  }
}
