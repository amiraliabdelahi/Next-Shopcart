import { auth } from "@/auth";
import { CardMap } from "@/components/CardMap";
import { user_role } from "@prisma/client";
import { createCard } from "../actions/create";
import prisma from "../../lib/config/db";

async function AdminPage() {
   const session = await auth()
   const cards = await prisma.card.findMany()

   return (
      <>
         {session?.user?.role == user_role.ADMIN && <div className="flex mx-auto justify-center gap-20">

            <form className="flex flex-col gap-3 w-[35%] h-[550px] items-center p-8 bg-white rounded" action={
               createCard
            }>
               <h1 className="font-extrabold text-3xl text-center text-[#66bd91]">Admin Panel</h1>
               <div className="flex flex-col gap-1">
                  <p>Title:</p>
                  <input
                     type="text"
                     name="title"
                     required
                     className="p-2 w-[25rem] rounded-md outline-none border border-[#616161]"
                     placeholder="Dress"
                  />
               </div>
               <div className="flex flex-col gap-1">
                  <p>Amount:</p>
                  <input
                     type="text"
                     name="amount"
                     required
                     className="p-2 w-[25rem] rounded-md outline-none border border-[#616161]"
                     placeholder="12"
                  />
               </div>
               <div className="flex flex-col gap-1">
                  <p>Description:</p>
                  <textarea
                     name="body"
                     required
                     className="p-2 w-[25rem] rounded-md outline-none border border-[#616161]"
                     placeholder="Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum architecto recusandae nihil quas inventore commodi repellat, blanditiis sunt optio aut adipisci facere minus tenetur expedita quia vitae reprehenderit velit! Cumque."
                  />
               </div>
               <div className="flex flex-col gap-1">
                  <p>Price:</p>
                  <input
                     type="text"
                     name="price"
                     required
                     className="p-2 w-[25rem] rounded-md outline-none border border-[#616161]"
                     placeholder="$15000"
                  />
               </div>
               <input type="file" name="file" />
               <button className="bg-[#66bd91] text-white w-[25rem] p-2 rounded-md duration-300 hover:bg-[#2f8a62]" type="submit">Create</button>
            </form>
            <main className="flex flex-col gap-6">
               {
                  cards.map((items) => (
                     <CardMap card={items} />
                  ))
               }
            </main>
         </div>
         }
      </>
   );
}

export default AdminPage;