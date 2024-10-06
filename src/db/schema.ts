import { pgEnum, pgTable, text, timestamp, uuid } from 'drizzle-orm/pg-core';

export const categories = [
  'inspirations',
  'ui',
  'animations',
  'technologies',
  'fonts',
  'svg',
  'icons',
  'colors',
  'other',
] as const;

export const categoryEnum = pgEnum('category', categories);

export const resources = pgTable('resources', {
  id: uuid('id').primaryKey().defaultRandom().notNull(),
  name: text('name').notNull(),
  description: text('description').notNull(),
  link: text('link').notNull(),
  imageUrl: text('image_url').notNull(),
  category: categoryEnum('category').notNull(),
  createdAt: timestamp('created_at', {
    withTimezone: true,
    mode: 'string',
  }).defaultNow(),
  updatedAt: timestamp('updated_at', {
    withTimezone: true,
    mode: 'string',
  }).defaultNow(),
});

export type InsertResource = typeof resources.$inferInsert;
export type SelectResource = typeof resources.$inferSelect;
