'use strict';

import { ApiProperty } from '@nestjs/swagger';
import { IsString } from 'class-validator';

export class UserLoginDto {
    @IsString()
    @ApiProperty()
    readonly userid: string;

    @IsString()
    @ApiProperty()
    readonly password: string;
}
