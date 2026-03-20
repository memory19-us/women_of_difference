import { sqliteTable, text, integer } from "drizzle-orm/sqlite-core";

export const reviews = sqliteTable("reviews", {
    id: integer("id").primaryKey({ autoIncrement: true }),
    itemType: text("item_type").notNull(),
    itemId: text("item_id").notNull(),
    userName: text("user_name").notNull(),
    userEmail: text("user_email").notNull(),
    rating: integer("rating").notNull(),
    comment: text("comment").notNull(),
    deletePin: text("delete_pin").notNull(),
    createdAt: integer("created_at", { mode: 'timestamp' }).notNull(),
});
