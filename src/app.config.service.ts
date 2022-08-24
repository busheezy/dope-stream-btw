import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';

@Injectable()
export class AppConfigService {
  constructor(private configService: ConfigService) {}

  get twitchUsername(): string {
    return this.configService.get('TWITCH_USERNAME');
  }

  get twitchAccessToekn(): string {
    return this.configService.get('TWITCH_ACCESS_TOKEN');
  }

  get twitchRefreshToken(): string {
    return this.configService.get('TWITCH_REFRESH_TOKEN');
  }

  get twitchClientId(): string {
    return this.configService.get('TWITCH_CLIENT_ID');
  }
}
