import {
  integer,
  text,
  boolean,
  pgTable,
  date,
  timestamp,
  serial,
} from "drizzle-orm/pg-core";

export const animals = pgTable("animals", {
  id: serial("id").primaryKey().notNull(),
  name: text("name").notNull(),
  type: text("type").notNull(),
  adopted: boolean("adopted").default(false).notNull(),
  createdAt: timestamp("created_at").defaultNow().notNull(),
  updatedAt: timestamp("updated_at").defaultNow().notNull(),
});
