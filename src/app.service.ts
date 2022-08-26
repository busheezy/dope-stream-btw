import { Injectable, OnModuleInit } from '@nestjs/common';
import TwitchJs from 'twitch-js';
import { AppConfigService } from './app.config.service';

const MESSAGE = 'dope stream btw';
const CHANNEL = 'fenomm';

@Injectable()
export class AppService implements OnModuleInit {
  client: TwitchJs;

  constructor(private readonly appConfigService: AppConfigService) {}

  async onModuleInit() {
    this.client = new TwitchJs({
      username: this.appConfigService.twitchUsername,
      token: this.appConfigService.twitchAccessToken,
      chat: {
        connectionTimeout: 5000,
        joinTimeout: 1000,
        log: {
          level: 'warn',
        },
      },
    });

    await this.connect();
  }

  async connect() {
    await this.client.chat.connect();
    await this.client.chat.join(CHANNEL);

    this.client.chat.on('PRIVMSG', async (privateMessage) => {
      if (privateMessage.username !== 'Aviko') {
        return;
      }

      if (privateMessage.message === MESSAGE) {
        await this.client.chat.say(CHANNEL, MESSAGE);
      }
    });
  }
}
