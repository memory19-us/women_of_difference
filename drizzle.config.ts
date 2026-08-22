import { defineConfig } from "drizzle-kit";

export default defineConfig({
    schema: "./lib/db/schema.ts",
    out: "./drizzle",
    dialect: "postgresql",
    dbCredentials: {
        url: "postgresql://postgres.iuxjfkttdemhoojyarty:9e5LO6iMPBMwvgU6@aws-1-eu-central-1.pooler.supabase.com:6543/postgres",
    },
});

