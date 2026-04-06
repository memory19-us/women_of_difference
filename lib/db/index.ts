import { drizzle } from "drizzle-orm/node-postgres";
import { Pool } from "pg";
import * as schema from "./schema";

const connectionString = process.env.DATABASE_URL || "postgresql://postgres:MtXLi4_Gs6gJzXy@db.iuxjfkttdemhoojyarty.supabase.co:5432/postgres";

// Supabase and Vercel often require sslmode=require for stable connections
const finalConnectionString = connectionString.includes('sslmode=') 
    ? connectionString 
    : connectionString + (connectionString.includes('?') ? '&sslmode=require' : '?sslmode=require');

if (!process.env.DATABASE_URL) {
    console.warn("⚠️ DATABASE_URL is not set in Vercel settings. Using the fallback connection string.");
}

/**
 * Cache the database connection in development. 
 */
const globalForDb = global as unknown as { pool: Pool | undefined };

export const pool = globalForDb.pool ?? new Pool({
    connectionString: finalConnectionString,
    max: 1, // Crucial for serverless functions to avoid connection exhaustion.
    ssl: finalConnectionString.includes('sslmode=require') ? { rejectUnauthorized: false } : false
});

if (process.env.NODE_ENV !== "production") {
    globalForDb.pool = pool;
}

export const db = drizzle(pool, { schema });




