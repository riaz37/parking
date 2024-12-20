import { Field, InputType, PartialType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { RestrictProperties } from 'src/common/dtos/common.input';

@InputType()
export class UserOrderByWithRelationInputStrict
  implements
    RestrictProperties<
      UserOrderByWithRelationInputStrict,
      Omit<
        Prisma.UserOrderByWithRelationInput,
        'Credentials' | 'AuthProvider' | 'Admin'
      >
    >
{
  @Field(() => Prisma.SortOrder, { nullable: true })
  uid: Prisma.SortOrder;
  @Field(() => Prisma.SortOrder, { nullable: true })
  createdAt: Prisma.SortOrder;
  @Field(() => Prisma.SortOrder, { nullable: true })
  updatedAt: Prisma.SortOrder;
  @Field(() => Prisma.SortOrder, { nullable: true })
  name: Prisma.SortOrder;
  @Field(() => Prisma.SortOrder, { nullable: true })
  image: Prisma.SortOrder;
  
  
}

@InputType()
export class UserOrderByWithRelationInput extends PartialType(
  UserOrderByWithRelationInputStrict,
) {}

@InputType()
export class UserOrderByRelationAggregateInput {
  @Field(() => Prisma.SortOrder)
  _count?: Prisma.SortOrder;
}
