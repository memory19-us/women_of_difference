import { Pool } from "pg";

const connectionString =
    "postgresql://postgres.iuxjfkttdemhoojyarty:9e5LO6iMPBMwvgU6@aws-1-eu-central-1.pooler.supabase.com:6543/postgres";

const pool = new Pool({
    connectionString,
    max: 1,
    ssl: { rejectUnauthorized: false },
});

try {
    const result = await pool.query("SELECT 1 AS ok");
    console.log("[KEEP_ALIVE] OK", result.rows[0], new Date().toISOString());
} catch (error) {
    console.error("[KEEP_ALIVE] Failed:", error);
    process.exitCode = 1;
} finally {
    await pool.end();
}
