"use server";
import { signIn } from "@/auth";
import { AuthError } from "next-auth";

export const loginAction = async (formdata: FormData) => {
  try {
    console.log(formdata)
    await signIn("credentials", formdata);
  } catch (error) {
    if (error instanceof AuthError) {
      console.log(error.type);
      switch (error.type) {
        case "CredentialsSignin":
          return {
            error: "Username or password incorrect!",
          };
        default:
          return {
            error: "Development Error!",
          };
      }
    }
    throw error;
  }
};
