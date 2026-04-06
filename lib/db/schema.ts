import { pgTable, text, integer, timestamp, serial } from "drizzle-orm/pg-core";

export const reviews = pgTable("reviews", {
    id: serial("id").primaryKey(),
    itemType: text("item_type").notNull(),
    itemId: text("item_id").notNull(),
    userName: text("user_name").notNull(),
    userEmail: text("user_email").notNull(),
    rating: integer("rating").notNull(),
    comment: text("comment").notNull(),
    deletePin: integer("delete_pin").notNull(),
    createdAt: timestamp("created_at", { withTimezone: true }).defaultNow().notNull(),
});

