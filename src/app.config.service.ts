import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';

@Injectable()
export class AppConfigService {
  constructor(private configService: ConfigService) {}

  get twitchUsername(): string {
    return this.configService.get('TWITCH_USERNAME');
  }

  get twitchAccessToken(): string {
    return this.configService.get('TWITCH_ACCESS_TOKEN');
  }
}
