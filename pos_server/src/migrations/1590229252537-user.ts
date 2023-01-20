import { MigrationInterface, QueryRunner } from 'typeorm';

export class user1590229252537 implements MigrationInterface {
    name = 'user1590229252537';

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(
            'CREATE TABLE "users" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "created_user" character varying NOT NULL, "created_at" TIMESTAMP NOT NULL DEFAULT now(), "updated_user" character varying NOT NULL, "updated_at" TIMESTAMP NOT NULL DEFAULT now(), "userid" character varying, "username" character varying, "password" character varying, "permissions" character varying, "departmentpermissions" character varying, "position" character varying, "email" character varying, "phone" character varying, "avatar" character varying, CONSTRAINT "UQ_37b098e31baedfa2b76e7876998" UNIQUE ("userid"), CONSTRAINT "PK_a3ffb1c0c8416b9fc6f907b7433" PRIMARY KEY ("id"))',
        );
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query('DROP TABLE "users"');
    }
}
