import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { AppService } from './app.service';
import { AppController } from './app.controller';
import { CoffeesModule } from './coffees/coffees.module';

@Module({
  imports: [
    CoffeesModule, 
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5433,
      username: 'postgres',
      password: 'pass123',
      database: 'postgres',
      autoLoadEntities: true,
      synchronize: true,
    })
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
