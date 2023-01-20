import { CanActivate, ExecutionContext, Injectable } from '@nestjs/common';
import { Reflector } from '@nestjs/core';

import { UserEntity } from '../modules/user/user.entity';

@Injectable()
export class PermissionsGuard implements CanActivate {
    constructor(private readonly _reflector: Reflector) {}

    canActivate(context: ExecutionContext): boolean {
        const permissions = this._reflector.get<string[]>(
            'permissions',
            context.getHandler(),
        );

        if (!permissions) {
            return true;
        }

        const request = context.switchToHttp().getRequest();
        const user = <UserEntity>request.user;
        if (user.permissions.indexOf(permissions.toString()) !== -1) {
            return true;
        }
        return false;
    }
}
