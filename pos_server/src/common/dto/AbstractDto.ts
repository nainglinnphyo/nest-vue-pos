'use strict';

import { AbstractEntity } from '../abstract.entity';

export class AbstractDto {
    id: string;
    createdAt: Date;
    createdUser: string;
    updatedAt: Date;
    updatedUser: string;

    constructor(entity: AbstractEntity) {
        this.id = entity.id;
        this.createdAt = entity.createdAt;
        this.createdUser = entity.createdUser;
        this.updatedAt = entity.updatedAt;
        this.updatedUser = entity.updatedUser;
    }
}
