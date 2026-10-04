"use server";

import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import { messages } from "@/lib/db";

export async function deleteMessageAction(id) {
  const index = messages.findIndex((m) => String(m.id) === String(id));
  if (index === -1) return;

  messages.splice(index, 1);
  revalidatePath("/messages");
  redirect("/messages?status=deleted");
}