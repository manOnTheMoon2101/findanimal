import { db } from "@/drizzle/db";
import { animals } from "@/drizzle/schema";
import { NextResponse } from "next/server";
export const GET = async (req: any) => {
  try {
    const result = await db.select().from(animals);
    return NextResponse.json(result);
  } catch (err) {
    return NextResponse.json(
      {
        message: "Error fething animals",
        err,
      },
      { status: 500 }
    );
  }
};
