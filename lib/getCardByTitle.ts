import prisma from "./config/db";

export const getCardByTitle = async (title: string) => {
  try {
    const user = await prisma.card.findUnique({
      where: {
        title,
      },
    });
    return user;
  } catch (error) {
    console.log("Error is :", error);
  }
};
