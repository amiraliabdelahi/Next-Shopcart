"use client"
import Image from "next/image";
import img from '../../public/image/1693299186760.jpg';
import {toast} from "sonner"
import { useRouter } from "next/navigation";
function ContactPage() {
   const router = useRouter()
   return (
      <main className="flex flex-col gap-4 py-8">
         <div className="w-[70%] flex flex-col mx-auto gap-1">
            <h1 className="text-3xl font-extrabold">Contact me</h1>
            <p className="w-52 border-4 border-[#70b391]"></p>
         </div>
         <div className="flex w-[70%] mx-auto justify-center gap-10">
            <main className="w-full flex">
               <Image
                  className="h-full rounded-md"
                  src={img}
                  loading="lazy"
                  alt=""
               />
            </main>
            <form action={
               async () => {
                  toast.success("Message: Your message has been sent!",{
                     description: "Friday, February 10, 2023 at 5:57 PM",
                  })
                  router.push("/")
               }
            } className="w-full bg-white flex flex-col rounded-md gap-2 p-8">
               <h1 className="text-4xl text-center font-extrabold text-[#70b391]">Contact To Me</h1>
               <section className="flex flex-col gap-1">
                  <p className="text-[#333333] text-left">Name</p>
                  <input
                     defaultValue="thomas shelby"
                     type="text"
                     className="text-black text-opacity-70 rounded-md border border-[#333333] bg-inherit p-2 outline-none transition-all duration-500 hover:border-[#2f8a62]"
                  />
               </section>
               <section className="flex flex-col gap-1">
                  <p className="text-[#333333] text-left">Email</p>
                  <input
                     defaultValue="johnwick@gmail.com"
                     type="email"
                     className="text-black text-opacity-70 rounded-md border border-[#333333] bg-inherit p-2 outline-none transition-all duration-500 hover:border-[#2f8a62]"
                  />
               </section>
               <section className="flex flex-col gap-1">
                  <p className="text-[#333333] text-left">Massage Text</p>
                  <textarea
                     defaultValue="hi i am mr amiri im programmer and my sis is sexy..."
                     className="text-black text-opacity-70 rounded-md border border-[#333333] bg-inherit p-2 outline-none transition-all duration-500 hover:border-[#2f8a62]"
                  />
               </section>
               <button
                  type="submit"
                  className="rounded-lg bg-[#70b391] px-9 py-2 text-white transition-all duration-500 hover:bg-[#4ba377]"
               >
                  Send
               </button>
            </form>
         </div>
      </main>
   );
}

export default ContactPage;