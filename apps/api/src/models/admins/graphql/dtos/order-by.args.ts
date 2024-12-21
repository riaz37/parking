import { Field, InputType, PartialType } from '@nestjs/graphql';
import { Prisma, User, Verification } from '@prisma/client';
import { RestrictProperties } from 'src/common/dtos/common.input';
import { UserOrderByWithRelationInput } from 'src/models/users/graphql/dtos/order-by.args';
import { VerificationOrderByRelationAggregateInput } from 'src/models/verifications/graphql/dtos/order-by.args';

@InputType()
export class AdminOrderByWithRelationInputStrict
  implements
    RestrictProperties<
      AdminOrderByWithRelationInputStrict,
      Prisma.AdminOrderByWithRelationInput
    >
{
  @Field(() => Prisma.SortOrder, { nullable: true })
  uid: Prisma.SortOrder;
  @Field(() => Prisma.SortOrder, { nullable: true })
  createdAt: Prisma.SortOrder;
  @Field(() => Prisma.SortOrder, { nullable: true })
  updatedAt: Prisma.SortOrder;
  User: UserOrderByWithRelationInput;
  Verifications: VerificationOrderByRelationAggregateInput;
  // Todo: Add below field decorator to the SortOrder properties.
  // @Field(() => Prisma.SortOrder)
}

@InputType()
export class AdminOrderByWithRelationInput extends PartialType(
  AdminOrderByWithRelationInputStrict,
) {}

@InputType()
export class AdminOrderByRelationAggregateInput {
  @Field(() => Prisma.SortOrder)
  _count?: Prisma.SortOrder;
}
