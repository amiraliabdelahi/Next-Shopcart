"use server";
//Admin Panel
import { writeFile } from "fs/promises";
import { revalidatePath } from "next/cache";
import { join } from "path";
import prisma from "../../lib/config/db";
import { getCardByTitle } from "@/lib/getCardByTitle";
import { randomUUID } from "crypto";
export const createCard = async (formdata: FormData) => {
  const existingCard = await getCardByTitle(formdata.get("title") as string);
  if (existingCard) {
    return {
      error: "Card Already Exists!",
    };
  }
  const file: File | null = formdata.get("file") as unknown as File;
  if (!file) {
    throw new Error("no file uploaded");
  }
  const byte = await file.arrayBuffer();
  const buffer = Buffer.from(byte);
  const path = join(".", "public/image", file.name);
  await writeFile(path, buffer.toString()).then(async () => {
    await prisma.card.create({
      data: {
        id:randomUUID(),
        title: formdata.get("title") as string,
        amount: formdata.get("amount") as string,
        price: formdata.get("price") as string,
        body: formdata.get("body") as string,
        image: path.replace("public", "").replace(/\\/g, "/"),
      },
    });
    revalidatePath("/admin");
  });
};
