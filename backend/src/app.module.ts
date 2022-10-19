import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule, TypeOrmModuleOptions } from '@nestjs/typeorm';
import { DictionaryModule } from './dcitionary';
import { VideoModule } from './video';
import { PictureModule } from './picture';
import AppConfig from './app.config';

@Module({
  imports: [
    PictureModule,
    DictionaryModule,
    VideoModule,
    TypeOrmModule.forRoot(AppConfig.db as TypeOrmModuleOptions), // database
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
