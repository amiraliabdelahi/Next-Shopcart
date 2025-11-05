import { auth } from "@/auth";
import Introduction from "@/components/Introduction";
import { user_role } from "@prisma/client";
import { revalidatePath } from "next/cache";
import Image from "next/image";
import Link from "next/link";
import prisma from "../lib/config/db";
import { randomUUID } from "crypto";
export default async function Home() {
  const cards = await prisma.card.findMany();
  const session = await auth();
  return (
    <>
      <Introduction />
      <section className="grid grid-cols-3 my-8 w-[90%] mx-auto place-items-center gap-6">
        {cards.map((item) => (
          <div
            key={item.id}
            className="flex flex-col justify-center p-8 gap-4 rounded-lg bg-white text-center "
          >
            <div className="w-80 h-60 mx-auto relative">
              <Image src={item.image!} className="object-cover rounded-lg" fill={true} alt="" />
            </div>
            <h1 className="text-4xl font-extrabold">{item.title}</h1>
            <p className="font-light">{item.body}</p>
            <main className="flex justify-around">
              <h3 className="font-semibold">Price: {item.price}</h3>
              <h3 className="font-semibold">Amount: {item.amount}</h3>
            </main>
            <form
              action={async () => {
                "use server";
                if (Number(item.amount) > 0) {
                  const existingCard = await prisma.shopitem.findFirst({
                    where: {
                      userId: session?.user.id!,
                      cardId: item.id
                    }
                  });
                  if (existingCard) {
                    return await prisma.shopitem.update({
                      where: {
                        userId: session?.user.id!,
                        cardId: item.id,
                        id: existingCard.id
                      },
                      data: {
                        amount: (Number(existingCard.amount) + 1).toString()
                      }
                    });
                    // return console.log("Exists!")
                  }
                  await prisma.shopitem.create({
                    data: {
                      amount: '1',
                      cardId: item.id,
                      userId: session?.user.id!,
                      id: randomUUID()
                    },
                  });
                  revalidatePath("/shopcart");
                } else {
                  console.log("insufficient funds!");
                }
              }
              }
            >
              {
                session?.user.role != user_role.ADMIN ? <button
                  type="submit"
                  className="w-full bg-[#4ba377] py-2 rounded-lg text-white transition-all font-semibold duration-150 hover:bg-[#66bd91]"
                >
                  Add to Shopcart
                </button> : <Link href={{ pathname: `/admin/editCard/${item.id}`, query: { title: item.title, body: item.body, price: item.price, amount: item.amount } }} className="px-32 bg-[#4ba377] font-semibold py-2 rounded-md text-white transition-all duration-150 hover:bg-[#66bd91]">Edit Card</Link>
              }
            </form>
          </div>
        ))}
      </section>
    </>
  );
}
