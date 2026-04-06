import { drizzle } from "drizzle-orm/postgres-js";
import postgres from "postgres";
import * as schema from "./schema";

// Ensure we have a valid connection string, prioritize the environment variable but fix the hardcoded one just in case.
let connectionString = process.env.DATABASE_URL || "postgresql://postgres:MtXLi4_Gs6gJzXy@db.iuxjfkttdemhoojyarty.supabase.co:5432/postgres";

// Supabase and Vercel often require sslmode=require for stable connections
if (connectionString && !connectionString.includes('sslmode=')) {
    connectionString += connectionString.includes('?') ? '&sslmode=require' : '?sslmode=require';
}

if (!process.env.DATABASE_URL) {
    console.warn("⚠️ DATABASE_URL is not set in Vercel settings. Using the fallback connection string.");
}

/**
 * Cache the database connection in development. This avoids creating a new connection on every HMR update.
 * In production, this will still work correctly for serverless environments.
 */
const globalForDb = global as unknown as { client: postgres.Sql<{}> | undefined };

export const client = globalForDb.client ?? postgres(connectionString, {
    prepare: false, // Required for Supabase pooling (port 6543) and generally safer in serverless
    // Use a small timeout to avoid hanging the entire function
    connect_timeout: 10, 
});

if (process.env.NODE_ENV !== "production") {
    globalForDb.client = client;
}

export const db = drizzle(client, { schema });



