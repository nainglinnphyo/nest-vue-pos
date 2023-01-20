'use strict';

import { ApiPropertyOptional } from '@nestjs/swagger';

import { AbstractDto } from '../../../common/dto/AbstractDto';
import { UserEntity } from '../user.entity';

export class UserDto extends AbstractDto {
    @ApiPropertyOptional()
    userid: string;

    @ApiPropertyOptional()
    username: string;

    @ApiPropertyOptional()
    password: string;

    @ApiPropertyOptional()
    permissions: string;

    @ApiPropertyOptional()
    departmentpermissions: string;

    @ApiPropertyOptional()
    position: string;

    @ApiPropertyOptional()
    email: string;

    @ApiPropertyOptional()
    phone: string;

    @ApiPropertyOptional()
    avatar: string;

    constructor(user: UserEntity) {
        super(user);
        this.userid = user.userid;
        this.password = user.password;
        this.username = user.username;
        this.permissions = user.permissions;
        this.departmentpermissions = user.departmentpermissions;
        this.position = user.position;
        this.email = user.email;
        this.phone = user.phone;
        this.avatar = user.avatar;
    }
}
