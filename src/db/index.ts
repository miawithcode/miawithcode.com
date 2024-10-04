import { drizzle } from 'drizzle-orm/postgres-js';
import postgres from 'postgres';
import * as dotenv from 'dotenv';
import * as schema from './schema';
import { migrate } from 'drizzle-orm/postgres-js/migrator';

dotenv.config({ path: '.env' });

if (!process.env.DATABASE_URL) {
  console.log('🔴 Cannot find database url');
}

const client = postgres(process.env.DATABASE_URL as string, { max: 1 });
export const db = drizzle(client, { schema });

async function runMigrate() {
  console.log('⏳ Start migrating...');
  const start = Date.now();

  await migrate(db, { migrationsFolder: 'drizzle' });

  const end = Date.now();
  console.log(`✅ Migrations completed in ${end - start} ms`);
}

runMigrate().catch((err) => {
  console.error('❌ Migration failed');
  console.error(err);
});
