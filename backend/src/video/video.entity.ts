import { BaseEntity, Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('trainee')
export class VideoEntity extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;
  @Column({ type: 'varchar', name: 'name' })
  name: string;
  @Column({ type: 'bigint', name: 'phone' })
  phone: number;
  @Column({ type: 'varchar', name: 'email' })
  email: string;
  @Column({ type: 'varchar', name: 'university' })
  university: string;
  @Column({ type: 'varchar', name: 'major' })
  major: string;
  @Column({ type: 'int', name: 'position' })
  position: number;
  @Column({ type: 'int', name: 'city' })
  city: number;
  @Column({ type: 'varchar', name: 'vita' })
  vita: string;
  @Column({ type: 'datetime', name: 'createTime' })
  createTime: string;
}
