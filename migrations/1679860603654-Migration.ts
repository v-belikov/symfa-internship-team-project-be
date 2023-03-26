import { MigrationInterface, QueryRunner } from "typeorm";

export class Migration1679860603654 implements MigrationInterface {
    name = 'Migration1679860603654'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`user\` ADD \`deleted_at\` datetime(6) NULL`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`user\` DROP COLUMN \`deleted_at\``);
    }

}
