import { Field, InputType, PartialType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { RestrictProperties } from 'src/common/dtos/common.input';

@InputType()
export class BookingTimelineOrderByWithRelationInputStrict
  implements
    RestrictProperties<
      BookingTimelineOrderByWithRelationInputStrict,
      Prisma.BookingTimelineOrderByWithRelationInput
    >
{
  @Field(() => Prisma.SortOrder)
  id: Prisma.SortOrder;
  @Field(() => Prisma.SortOrder)
  timestamp: Prisma.SortOrder;
  @Field(() => Prisma.SortOrder)
  status: Prisma.SortOrder;
  bookingId: Prisma.SortOrder;
  @Field(() => Prisma.SortOrder)
  valetId: Prisma.SortOrder | Prisma.SortOrderInput;
  @Field(() => Prisma.SortOrder)
  managerId: Prisma.SortOrder | Prisma.SortOrderInput;
  Booking: Prisma.BookingOrderByWithRelationInput;
  Valet: Prisma.ValetOrderByWithRelationInput;
  Manager: Prisma.ManagerOrderByWithRelationInput;
  // Todo: Add below field decorator to the SortOrder properties.
  // @Field(() => Prisma.SortOrder)
}

@InputType()
export class BookingTimelineOrderByWithRelationInput extends PartialType(
  BookingTimelineOrderByWithRelationInputStrict,
) {}

@InputType()
export class BookingTimelineOrderByRelationAggregateInput {
  @Field(() => Prisma.SortOrder)
  _count?: Prisma.SortOrder;
}
