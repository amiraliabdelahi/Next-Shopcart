"use server";
import { revalidatePath } from "next/cache";
import prisma from "../../lib/config/db";

export const deleteCard = async (id: string) => {
  try {
    await prisma.card.delete({
      where: {
        id,
      },
    });
    revalidatePath("/admin");
  } catch (error) {
    console.log(error);
  }
};
