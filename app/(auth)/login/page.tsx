"use client"
import { loginAction } from "@/app/actions/login";
import { GitButton, GoogleButton } from "@/components/ProviderButton";
import { toast } from "sonner";
import Link from "next/link";

function LoginPage() {
   return (<>
      <form action={
         async (formdata: FormData) => {
            const result = await loginAction(formdata)
            if (result?.error) {
               toast.error("Login Failed",{
                  description: result.error
               })
            } else {
               toast.success("Login Succesfull",{
                  description: `Logged in as user with Email : ${formdata.get("email")}`,
               })
            }
         }
      } className="flex flex-col max-w-lg py-12 gap-4 mx-auto items-center bg-white p-8 rounded-lg shadow-md shadow-[#70b391] [&>*]:w-[380px]">
         <p className="text-[#70b391] text-4xl text-center">Login Page</p>
         <section className="flex flex-col gap-1">
            <p className="text-left text-[#403D39]">Email</p>
            <input className="p-2 rounded outline-none border border-[#969696]" type="email" name="email" placeholder="johnwick@gmail.com" />
         </section>
         <section className="flex flex-col gap-1">
            <p className="text-left text-[#403D39]">Password</p>
            <input className="p-2 rounded outline-none border border-[#969696]" type="password" name="password" placeholder="*********" />
         </section>
         <section className="flex justify-between">
            <div className="flex gap-2">
               <input type="checkbox" />
               <p className="text-[#403D39]">RememberMe</p>
            </div>
            <Link href="/forget-password" className="text-[#403D39]">Forgot Password?</Link>
         </section>
         <section className="flex flex-col gap-2">
            <button className="p-2 rounded bg-[#4ba377] text-white transition-all duration-300 hover:bg-[#66bd91]" type="submit">Login</button>
            <Link href="/signup" className="text-[#403D39] text-center">You dont have an account?</Link>
         </section>
      </form>
      <main className="flex gap-5 justify-center items-center p-3">
         <GitButton />
         <GoogleButton />
      </main>
   </>
   );
}

export default LoginPage;