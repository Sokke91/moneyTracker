import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ContractsModule } from './contracts/contracts.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'sqlite',
      database: '~/Dokumente/Projects/money.sqlite',
      entities: [],
    }),
    ContractsModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
