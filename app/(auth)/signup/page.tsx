"use client"
import { registerAction } from "@/app/actions/signup";
import {toast} from 'sonner'
import Link from "next/link";
import { redirect } from "next/navigation";

function RegisterPage() {
   return (
      <>
         <form action={
            async (formdata: FormData) => {
               const result = await registerAction(formdata)
               if (result?.error) {
                  // setError(result.error)
                  toast.error("Registeration Failed",{
                     description: result.error,
                  })
               }
               else {
                  toast.success("Registeration Succesfull",{
                     description: `Registered user with email : ${formdata.get("email")}`,
                  })
                  redirect("/login")
               }
            }
         } className="flex flex-col max-w-lg py-10 gap-4 mx-auto items-center bg-white p-8 rounded-lg shadow-md shadow-[#70b391] [&>*]:w-[380px]">
            <h1 className="text-[#70b391] text-4xl text-center">Signup Page</h1>
            <section className="flex flex-col gap-1">
               <p className="text-left text-[#403D39]">Username</p>
               <input className="p-2 rounded outline-none border border-[#969696]" type="text" placeholder="Tom Hardey" name="name" />
            </section>
            <section className="flex flex-col gap-1">
               <p className="text-left text-[#403D39]">Email</p>
               <input className="p-2 rounded outline-none border border-[#969696]" type="text" placeholder="johnwick@gmail.com" name="email" />
            </section>
            <section className="flex flex-col gap-1">
               <p className="text-left text-[#403D39]">Password</p>
               <input type="password" className="p-2 rounded outline-none border border-[#969696]" placeholder="*********" name="password" />
            </section>
            <section className="flex flex-col gap-2">
               <button className="p-2 rounded bg-[#4ba377] text-white transition-all duration-300 hover:bg-[#66bd91]" type="submit">Register</button>
               <Link href="/login" className="text-[#403D39] text-center">Already have an account?</Link>
            </section>
         </form>
      </>
   );
}

export default RegisterPage;