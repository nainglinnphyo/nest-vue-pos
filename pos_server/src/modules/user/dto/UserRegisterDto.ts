'use strict';

import { ApiProperty } from '@nestjs/swagger';
import {
    IsEmail,
    IsNotEmpty,
    IsOptional,
    IsPhoneNumber,
    IsString,
    MinLength,
} from 'class-validator';
import { Column } from 'typeorm';

export class UserRegisterDto {
    @IsString()
    @IsNotEmpty()
    @ApiProperty()
    readonly userid: string;

    @IsString()
    @IsNotEmpty()
    @ApiProperty()
    readonly username: string;

    @IsString()
    @MinLength(6)
    @ApiProperty({ minLength: 5 })
    readonly password: string;

    @Column()
    @IsPhoneNumber('ZZ')
    @IsOptional()
    @ApiProperty()
    phone: string;
    @IsString()
    @IsOptional()
    @ApiProperty()
    @IsEmail()
    readonly email: string;

    @ApiProperty({ type: 'string', format: 'binary' })
    avatar: any;
}
