import { drizzle } from "drizzle-orm/node-postgres";
import { Pool } from "pg";
import * as schema from "./schema";

const connectionString = process.env.DATABASE_URL;

// Ensure we have a connection string
if (!connectionString) {
    if (process.env.NODE_ENV === "production") {
        throw new Error("❌ DATABASE_URL is not set in Vercel settings.");
    }
    console.warn("⚠️ DATABASE_URL is not set. Local development might fail.");
}

/**
 * Supabase Pooler (port 6543) works best when we handle SSL in the Pool config.
 * We strip sslmode=require from the string if present to avoid driver overrides.
 */
const finalConnectionString = connectionString?.replace(/[?&]sslmode=require/, "") || "";

const globalForDb = global as unknown as { pool: Pool | undefined };

export const pool = globalForDb.pool ?? new Pool({
    connectionString: finalConnectionString,
    max: 10,
    ssl: { 
        rejectUnauthorized: false 
    }
});

if (process.env.NODE_ENV !== "production") {
    globalForDb.pool = pool;
}

export const db = drizzle(pool, { schema });




