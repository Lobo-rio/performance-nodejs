import {
  BeforeInsert,
  Entity,
  Column,
  CreateDateColumn,
  DeleteDateColumn,
  PrimaryGeneratedColumn,
} from 'typeorm'

import { v4 as uuid } from 'uuid'

@Entity({ name: 'pots' })
export class Post {
  @PrimaryGeneratedColumn('uuid')
  id: string

  @Column({ length: 80 })
  title: string

  @Column({ length: 255 })
  description: string

  @Column({ length: 90 })
  city: string

  @Column({ length: 60 })
  author: string

  @Column({ name: 'is_active' })
  isActive: boolean

  @CreateDateColumn({ name: 'created_at' })
  createdAt: string

  @DeleteDateColumn({ name: 'deleted_at' })
  deletedAt: string

  constructor() {
    if (!this.id) this.id = uuid()
  }
}
