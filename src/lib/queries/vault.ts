'use server';

import { unstable_noStore as noStore } from 'next/cache';

import { db } from '@/db';
import { resources } from '@/db/schema';
import { asc } from 'drizzle-orm';

export async function getResources() {
  noStore();
  return await db.select().from(resources).orderBy(asc(resources.name));
}
