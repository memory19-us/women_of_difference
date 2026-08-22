import { drizzle } from "drizzle-orm/node-postgres";
import { Pool } from "pg";
import * as schema from "./schema";

const connectionString =
    "postgresql://postgres.iuxjfkttdemhoojyarty:9e5LO6iMPBMwvgU6@aws-1-eu-central-1.pooler.supabase.com:6543/postgres";

const globalForDb = global as unknown as { pool: Pool | undefined };

export const pool = globalForDb.pool ?? new Pool({
    connectionString,
    max: 10,
    ssl: { rejectUnauthorized: false },
});

if (process.env.NODE_ENV !== "production") {
    globalForDb.pool = pool;
}

export const db = drizzle(pool, { schema });




