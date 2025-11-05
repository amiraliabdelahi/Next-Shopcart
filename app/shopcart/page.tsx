import { auth } from "@/auth";
import { user_role } from "@prisma/client";
import { revalidatePath } from "next/cache";
import Image from "next/image";
import prisma from "../../lib/config/db";

async function ShoppingCart() {
   const cards = await prisma.shopitem.findMany({ include: { card: true, user: true } })
   const session = await auth()
   return (

      <>
         <main className="mx-auto grid grid-cols-4 gap-8 px-10">
            {
               cards.map((item) => (
                  (item.userId == session?.user.id || session?.user.role == user_role.ADMIN) && (
                     <div key={item.id} data-admin={session.user.role == user_role.ADMIN} className="flex flex-col group mx-auto justify-center p-8 gap-3 rounded-lg w-full bg-white text-center">

                        <div className="size-40 mx-auto relative">
                           <Image src={item.card.image!} className="bg-cover" fill={true} alt="" />
                        </div>
                        <h1 className="text-4xl font-extrabold">{item.card.title}</h1>
                        <h1 className="font-semibold hidden group-data-[admin]:block">{item.user.email}</h1>
                        <main className="flex justify-center gap-6">
                           <h2 className="">Price: {item.card.price}</h2>
                           <h1 className="">Amount: {item.amount}</h1>
                        </main>
                        <h2 className="font-semibold">Total: {Number(item.card.price) * Number(item.amount)}</h2>
                        <main className="flex items-center justify-center gap-4">
                           <form action={
                              async () => {
                                 "use server"
                                 if (Number(item.amount) > 1) {
                                    await prisma.shopitem.update({
                                       data: {
                                          amount: (Number(item.amount) - 1).toString()
                                       },
                                       where: {
                                          id: item.id
                                       }
                                    })
                                    revalidatePath("/shopcart")
                                 }
                              }
                           }>
                              <button className="py-2" type="submit">
                                 <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    strokeWidth={1.5}
                                    stroke="currentColor"
                                    className="w-6 h-6"
                                 >
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 12h14" />
                                 </svg>
                              </button>
                           </form>
                           <form action={async () => {
                              "use server"
                              await prisma.shopitem.delete({
                                 where: {
                                    id: item.id
                                 }
                              })
                              revalidatePath("/shopcart")
                           }
                           }>
                              <button className="bg-red-600 rounded-md text-white py-2 w-[8rem] font-semibold" type="submit">Delete</button>
                           </form>
                           <form action={
                              async () => {
                                 "use server"
                                 await prisma.shopitem.update({
                                    data: {
                                       amount: (Number(item.amount) + 1).toString()
                                    },
                                    where: {
                                       id: item.id
                                    }
                                 })
                                 revalidatePath("/shopcart")
                              }
                           }>
                              <button className="py-2" type="submit">
                                 <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    strokeWidth={1.5}
                                    stroke="currentColor"
                                    className="w-6 h-6"
                                 >
                                    <path
                                       strokeLinecap="round"
                                       strokeLinejoin="round"
                                       d="M12 4.5v15m7.5-7.5h-15"
                                    />
                                 </svg>
                              </button>
                           </form>
                        </main>
                     </div>
                  )
               ))
            }
         </main>
         {/* <h1 className="font-semibold text-xs text-white w-full my-auto mx-auto rounded-md flex bg-red-400 py-4 text-center items-center justify-center gap-4">Your Shopcart has been Empty!</h1> */}
         {/* <section className="flex justify-center mt-auto mx-auto p-6">
            <Link className="text-white mt-auto w-[8rem] rounded-md font-semibold bg-green-600 py-3 text-center" href="">Finish</Link>
         </section> */}
      </>
   );
}

export default ShoppingCart;