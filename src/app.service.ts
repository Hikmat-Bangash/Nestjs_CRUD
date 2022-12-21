import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello WELCOME to the Nestjs starting journey';
  }
}
