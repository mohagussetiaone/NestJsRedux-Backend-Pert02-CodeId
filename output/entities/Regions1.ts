import { Column, Entity, Index, PrimaryGeneratedColumn } from "typeorm";

@Index("region_pk", ["regionId"], { unique: true })
@Entity("regions1", { schema: "public" })
export class Regions1 {
  @PrimaryGeneratedColumn({ type: "integer", name: "region_id" })
  regionId: number;

  @Column("character varying", {
    name: "region_name",
    nullable: true,
    length: 50,
  })
  regionName: string | null;
}
