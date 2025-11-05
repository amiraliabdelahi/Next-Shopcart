"use server";
import { writeFile } from "fs/promises";
import { revalidatePath } from "next/cache";
import prisma from "../../lib/config/db";
import { join } from "path";

export const updateCard = async (
  params: { id: string },
  formdata: FormData
) => {
  try {
    const file: File | null = formdata.get("file") as unknown as File;
    if (!file) {
      throw new Error("no file uploaded");
    }
    const byte = await file.arrayBuffer();
    const buffer = Buffer.from(byte);
    const path = join(".", "public/image", file.name);
    await writeFile(path, buffer).then(async () => {
      await prisma.card.update({
        where: {
          id: params.id,
        },
        data: {
          title: formdata.get("title") as string,
          body: formdata.get("body") as string,
          amount: formdata.get("amount") as string,
          price: formdata.get("price") as string,
          image: path.replace("public", "").replace(/\\/g, "/"),
        },
      });
      revalidatePath("/admin");
    });
  } catch (error) {
    console.log(error);
  }
};
