import { Injectable } from '@nestjs/common';
import { FindManyUserArgs, FindUniqueUserArgs } from './dtos/find.args';
import { PrismaService } from 'src/common/prisma/prisma.service';
import { UpdateUserInput } from './dtos/update-user.input';
import {
  RegisterWithCredentialsInput,
  RegisterWithProviderInput,
} from './dtos/create-user.input';
import * as bcrypt from 'bcrypt';
import { v4 as uuid } from 'uuid';
import { BadRequestException } from '@nestjs/common';
@Injectable()
export class UsersService {
  constructor(private readonly prisma: PrismaService) {}

  registerWithProvider({ name, uid, image, type }: RegisterWithProviderInput) {
    return this.prisma.user.create({
      data: {
        name,
        uid,
        image,
        AuthProvider: {
          create: {
            type,
          },
        },
      },
    });
  }

  async registerWithCredentials({
    name,
    email,
    password,
    image,
  }: RegisterWithCredentialsInput) {
    // check if user already exists
    const existingUser = await this.prisma.credentials.findUnique({
      where: { email },
    })

    if (existingUser) {
      throw new BadRequestException('User already exists with this email.')
    }
    
    //Hash password
    const salt = bcrypt.genSaltSync(10);
    const passwordHash = bcrypt.hashSync(password, salt);

    const uid = uuid();

    return this.prisma.user.create({
      data: {
        uid,
        name,
        image,
        Credentials: {
          create: {
            email,
            passwordHash,
          },
        },
        AuthProvider: {
          create: {
            type: 'CREDENTIALS',
          },
        },
      },
      include: {
        Credentials: true,
      }
    });
  }

  findAll(args: FindManyUserArgs) {
    return this.prisma.user.findMany(args);
  }

  findOne(args: FindUniqueUserArgs) {
    return this.prisma.user.findUnique(args);
  }

  update(updateUserInput: UpdateUserInput) {
    const { uid, ...data } = updateUserInput;
    return this.prisma.user.update({
      where: { uid },
      data: data,
    });
  }

  remove(args: FindUniqueUserArgs) {
    return this.prisma.user.delete(args);
  }
}
