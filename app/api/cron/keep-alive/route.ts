import { pool } from "@/lib/db";
import { NextResponse } from "next/server";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

/**
 * Lightweight DB ping — useful for manual checks.
 * Scheduled keep-alive runs via GitHub Actions (scripts/keep-alive.mjs).
 */
export async function GET() {
    try {
        const result = await pool.query("SELECT 1 AS ok");
        return NextResponse.json({
            ok: true,
            result: result.rows[0],
            timestamp: new Date().toISOString(),
        });
    } catch (error: unknown) {
        const message = error instanceof Error ? error.message : "Unknown error";
        console.error("[KEEP_ALIVE_ERROR]", error);
        return NextResponse.json({ ok: false, error: message }, { status: 500 });
    }
}
