import { Module } from '@nestjs/common';
import { AppService } from './app.service';
import { validate } from './env.validation';
import { ConfigModule } from '@nestjs/config';
import { AppConfigService } from './app.config.service';

@Module({
  imports: [
    ConfigModule.forRoot({
      validate,
    }),
  ],
  providers: [AppService, AppConfigService],
})
export class AppModule {}
