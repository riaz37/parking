import { Field, ObjectType } from '@nestjs/graphql';
import { $Enums, BookingTimeline as BookingTimelineType } from '@prisma/client';
import { RestrictProperties } from 'src/common/dtos/common.input';

@ObjectType()
export class BookingTimeline
  implements RestrictProperties<BookingTimeline, BookingTimelineType>
{
  @Field(() => $Enums.BookingStatus)
  status: $Enums.BookingStatus;
  id: number;
  timestamp: Date;
  bookingId: number;
  @Field({ nullable: true })
  valetId: string;
  @Field({ nullable: true })
  managerId: string;
  // Todo Add below to make optional fields optional.
  // @Field({ nullable: true })
}
