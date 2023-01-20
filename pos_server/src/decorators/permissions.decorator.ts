import { SetMetadata } from '@nestjs/common';

import { PermissionsType } from '../common/constants/permissions-type';

export const Permissions = (...permissions: PermissionsType[]) =>
    SetMetadata('permissions', permissions);
