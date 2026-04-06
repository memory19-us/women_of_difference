import { drizzle } from "drizzle-orm/postgres-js";
import postgres from "postgres";
import * as schema from "./schema";

const connectionString = process.env.DATABASE_URL || "postgresql://postgres:MtXLi4_Gs6gJzXy@db.iuxjfkttdemhoojyarty.supabase.co:5432/postgres";

if (!connectionString) {
    console.warn("DATABASE_URL is not set in environment variables");
}

/**
 * Cache the database connection in development. This avoids creating a new connection on every HMR update.
 * In production, this will still work correctly for serverless environments.
 */
const globalForDb = global as unknown as { client: postgres.Sql<{}> | undefined };

export const client = globalForDb.client ?? postgres(connectionString, {
    prepare: false, // Required for Supabase pooling (port 6543) if used, but safe in general for serverless
});

if (process.env.NODE_ENV !== "production") {
    globalForDb.client = client;
}

export const db = drizzle(client, { schema });


