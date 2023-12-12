"use server";

import { db } from "@/lib/db";

export async function create(data: FormData) {
  const title = data.get("title") as string;
  await db.board.create({
    data: {
      title,
    },
  });
}
