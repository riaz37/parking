import { AdminsModule } from './models/admins/admins.module';
import { ManagersModule } from './models/managers/managers.module';
import { CustomersModule } from './models/customers/customers.module';
import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { GraphQLModule } from '@nestjs/graphql';
import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { join } from 'path';
import { ConfigModule } from '@nestjs/config';
import { PrismaModule } from './common/prisma/prisma.module';
import { UsersModule } from './models/users/users.module';
import { JwtModule } from '@nestjs/jwt';
import { ValetsModule } from './models/valets/valets.module';
import { CompaniesModule } from './models/companies/companies.module';
import { GaragesModule } from './models/garages/garages.module';
import { AddressesModule } from './models/addresses/addresses.module';
import { SlotsModule } from './models/slots/slots.module';
import { BookingsModule } from './models/bookings/bookings.module';
import { ValetAssignmentsModule } from './models/valet-assignments/valet-assignments.module';
import { BookingTimelinesModule } from './models/booking-timelines/booking-timelines.module';
import { ReviewsModule } from './models/reviews/reviews.module';
import { VerificationsModule } from './models/verifications/verifications.module';

//TODO: move to util lib
const MAX_AGE = '1d';
@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),
    JwtModule.register({
      secret: process.env.JWT_SECRET,
      signOptions: { expiresIn: MAX_AGE },
      global: true,
    }),
    GraphQLModule.forRoot<ApolloDriverConfig>({
      driver: ApolloDriver,
      introspection: true,
      fieldResolverEnhancers: ['guards'],
      autoSchemaFile: join(process.cwd(), 'src/schema.gql'),
      buildSchemaOptions: {
        numberScalarMode: 'integer',
      },
    }),
    PrismaModule,
    UsersModule,
    AdminsModule,
    CustomersModule,
    ManagersModule,
    ValetsModule,
    CompaniesModule,
    GaragesModule,
    AddressesModule,
    SlotsModule,
    BookingsModule,
    ValetAssignmentsModule,
    BookingsModule,
    BookingTimelinesModule,
    ReviewsModule,
    VerificationsModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
