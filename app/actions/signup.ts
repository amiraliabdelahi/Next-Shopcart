"use server";
import { getUserByEmail } from "../data/getUserByEmail";
import { hash } from "bcryptjs";
import prisma from "../../lib/config/db";

export async function registerAction(formdata: FormData) {
  const existingUser = await getUserByEmail(formdata.get("email") as string);
  if (existingUser) {
    return {
      error: "Email Already Exists!",
    };
  }
  await prisma.user.create({
    data: {
      name: formdata.get("name") as string,
      email: formdata.get("email") as string,
      password: await hash(formdata.get("password") as string, 18),
    },
  });
}
