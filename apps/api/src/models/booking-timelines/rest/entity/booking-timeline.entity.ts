import { $Enums, BookingTimeline } from '@prisma/client';
import { IsOptional } from 'class-validator';
import { RestrictProperties } from 'src/common/dtos/common.input';

export class BookingTimelineEntity
  implements RestrictProperties<BookingTimelineEntity, BookingTimeline>
{
  status: $Enums.BookingStatus;
  id: number;
  timestamp: Date;
  bookingId: number;
  @IsOptional()
  valetId: string;
  @IsOptional()
  managerId: string;
}
