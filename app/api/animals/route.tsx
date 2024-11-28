import { db } from "@/drizzle/db";
import { animals } from "@/drizzle/schema";
import { NextResponse } from "next/server";
import { eq } from "drizzle-orm";
export const GET = async (req: any) => {
  try {
    const url = new URL(req.url);
    const type = url.searchParams.get("type");

    let result;
    if (type) {
      result = await db
        .select()
        .from(animals)
        .where(eq(animals.animalType, type));
    } else {
      result = await db.select().from(animals);
    }

    return NextResponse.json(result);
  } catch (err) {
    return NextResponse.json(
      {
        message: "Error fetching animals",
        err,
      },
      { status: 500 }
    );
  }
};
