import { MigrationInterface, QueryRunner, Table, TableIndex } from "typeorm";

export class CreateTableUsers1694626312083 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name: "posts",
                columns: [
                    {
                        name: "id",
                        type: "uuid",
                        isPrimary: true,
                    },
                    {
                        name: "title",
                        type: "varchar",
                        length: "80",
                        isUnique: true,
                        isNullable: false,
                    },
                    {
                        name: "description",
                        type: "varchar",
                        length: "255",
                        isNullable: false,
                    },
                    {
                        name: "city",
                        type: "varchar",
                        length: "90",
                        isNullable: false,
                    },
                    {
                        name: "author",
                        type: "varchar",
                        length: "60",
                        isNullable: false,
                    },
                    {
                        name: "is_active",
                        type: "boolean",
                        isNullable: false,
                    },
                    {
                        name: "created_at",
                        type: "timestamp",
                        default: "now()",
                    },
                    {
                        name: "deleted_at",
                        type: "timestamp",
                        isNullable: true,
                    },
                ],
            }),
            true,
        )

        await queryRunner.createIndex(
            "posts",
            new TableIndex({
                name: "IDX_POST_ID",
                columnNames: ["id"],
            }),
        )
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropIndex("posts", "IDX_POST_ID")
        await queryRunner.dropTable("posts");
    }

}
