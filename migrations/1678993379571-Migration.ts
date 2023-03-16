import { MigrationInterface, QueryRunner } from "typeorm";

export class Migration1678993379571 implements MigrationInterface {
    name = 'Migration1678993379571'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE \`avatar\` (\`id\` varchar(36) NOT NULL, \`createdAt\` timestamp(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6), \`updatedAt\` timestamp(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6) ON UPDATE CURRENT_TIMESTAMP(6), \`avatar_path\` varchar(255) NOT NULL, UNIQUE INDEX \`IDX_90571a93f3925a3780aecc94d0\` (\`avatar_path\`), PRIMARY KEY (\`id\`)) ENGINE=InnoDB`);
        await queryRunner.query(`CREATE TABLE \`user\` (\`id\` varchar(36) NOT NULL, \`createdAt\` timestamp(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6), \`updatedAt\` timestamp(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6) ON UPDATE CURRENT_TIMESTAMP(6), \`user_id\` varchar(255) NOT NULL, \`name\` varchar(20) NOT NULL, \`surname\` varchar(20) NOT NULL, \`email\` varchar(40) NOT NULL, \`phone_number\` varchar(40) NOT NULL, \`discription\` varchar(255) NOT NULL, \`age\` tinyint NOT NULL, \`gender\` enum ('male', 'female') NOT NULL, \`date_of_birth\` date NOT NULL, \`address\` varchar(255) NOT NULL, \`role\` enum ('teacher', 'student') NOT NULL, \`avatarId\` varchar(36) NULL, UNIQUE INDEX \`IDX_758b8ce7c18b9d347461b30228\` (\`user_id\`), UNIQUE INDEX \`IDX_e12875dfb3b1d92d7d7c5377e2\` (\`email\`), UNIQUE INDEX \`IDX_01eea41349b6c9275aec646eee\` (\`phone_number\`), PRIMARY KEY (\`id\`)) ENGINE=InnoDB`);
        await queryRunner.query(`ALTER TABLE \`user\` ADD CONSTRAINT \`FK_58f5c71eaab331645112cf8cfa5\` FOREIGN KEY (\`avatarId\`) REFERENCES \`avatar\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`user\` DROP FOREIGN KEY \`FK_58f5c71eaab331645112cf8cfa5\``);
        await queryRunner.query(`DROP INDEX \`IDX_01eea41349b6c9275aec646eee\` ON \`user\``);
        await queryRunner.query(`DROP INDEX \`IDX_e12875dfb3b1d92d7d7c5377e2\` ON \`user\``);
        await queryRunner.query(`DROP INDEX \`IDX_758b8ce7c18b9d347461b30228\` ON \`user\``);
        await queryRunner.query(`DROP TABLE \`user\``);
        await queryRunner.query(`DROP INDEX \`IDX_90571a93f3925a3780aecc94d0\` ON \`avatar\``);
        await queryRunner.query(`DROP TABLE \`avatar\``);
    }

}
