import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ContractsModule } from './contracts/contracts.module';
import { UsersModule } from './users/users.module';
import { AccountsModule } from './accounts/accounts.module';
import { OutgoingsModule } from './outgoings/outgoings.module';
import { IncomesModule } from './incomes/incomes.module';
import { CategoriesModule } from './categories/categories.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'sqlite',
      database: '~/Dokumente/Projects/money.sqlite',
      entities: [],
    }),
    ContractsModule,
    UsersModule,
    AccountsModule,
    OutgoingsModule,
    IncomesModule,
    CategoriesModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
