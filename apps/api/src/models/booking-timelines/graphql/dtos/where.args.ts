import { Field, InputType, PartialType } from '@nestjs/graphql';
import { $Enums, Prisma } from '@prisma/client';
import { RestrictProperties } from 'src/common/dtos/common.input';

@InputType()
export class BookingTimelineWhereUniqueInput {
  id: number;
}

@InputType()
export class BookingTimelineWhereInputStrict
  implements
    RestrictProperties<
      BookingTimelineWhereInputStrict,
      Prisma.BookingTimelineWhereInput
    >
{
  id: number | Prisma.IntFilter<'BookingTimeline'>;
  timestamp: string | Date | Prisma.DateTimeFilter<'BookingTimeline'>;
  status:
    | $Enums.BookingStatus
    | Prisma.EnumBookingStatusFilter<'BookingTimeline'>;
  bookingId: number | Prisma.IntFilter<'BookingTimeline'>;
  valetId: string | Prisma.StringNullableFilter<'BookingTimeline'>;
  managerId: string | Prisma.StringNullableFilter<'BookingTimeline'>;
  Booking:
    | (Prisma.Without<
        Prisma.BookingScalarRelationFilter,
        Prisma.BookingWhereInput
      > &
        Prisma.BookingWhereInput)
    | (Prisma.Without<
        Prisma.BookingWhereInput,
        Prisma.BookingScalarRelationFilter
      > &
        Prisma.BookingScalarRelationFilter);
  Valet:
    | (Prisma.Without<
        Prisma.ValetNullableScalarRelationFilter,
        Prisma.ValetWhereInput
      > &
        Prisma.ValetWhereInput)
    | (Prisma.Without<
        Prisma.ValetWhereInput,
        Prisma.ValetNullableScalarRelationFilter
      > &
        Prisma.ValetNullableScalarRelationFilter);
  Manager:
    | (Prisma.Without<
        Prisma.ManagerNullableScalarRelationFilter,
        Prisma.ManagerWhereInput
      > &
        Prisma.ManagerWhereInput)
    | (Prisma.Without<
        Prisma.ManagerWhereInput,
        Prisma.ManagerNullableScalarRelationFilter
      > &
        Prisma.ManagerNullableScalarRelationFilter);
  // Todo: Add the below field decorator only to the $Enums types.
  // @Field(() => $Enums.x)

  AND: BookingTimelineWhereInput[];
  OR: BookingTimelineWhereInput[];
  NOT: BookingTimelineWhereInput[];
}

@InputType()
export class BookingTimelineWhereInput extends PartialType(
  BookingTimelineWhereInputStrict,
) {}

@InputType()
export class BookingTimelineListRelationFilter {
  every?: BookingTimelineWhereInput;
  some?: BookingTimelineWhereInput;
  none?: BookingTimelineWhereInput;
}

@InputType()
export class BookingTimelineRelationFilter {
  is?: BookingTimelineWhereInput;
  isNot?: BookingTimelineWhereInput;
}
