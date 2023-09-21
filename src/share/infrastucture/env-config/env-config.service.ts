import { Injectable } from '@nestjs/common';
import { EnvConfig } from './env.config.interface';
import { ConfigService } from '@nestjs/config/dist';

@Injectable()
export class EnvConfigService implements EnvConfig {
  constructor(private configService: ConfigService){

  }

  getAppPort(): number {
    return Number(this.configService.get<number>('PORT'))
  }

  getNodeEnv(): string {
    return String(this.configService.get<string>("NODE_ENV"))
  }
}
