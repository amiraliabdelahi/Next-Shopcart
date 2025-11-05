import { updateCard } from "@/app/actions/update";

export default function editCard({ params, searchParams }: { params: { id: string }, searchParams: { [key: string]: string | undefined }; }) {
   return (
      <>
         <form className="flex flex-col gap-2 mx-auto max-w-lg items-center p-8 bg-white rounded" action={
            async (formdata: FormData) => {
               "use server"
               await updateCard(params, formdata)
            }
         }>
            <h1 className="font-extrabold text-4xl text-center text-[#70b391]">Edit Card</h1>
            <div>
               <p>Title:</p>
               <input
                  type="text"
                  name="title"
                  required
                  className="p-2 w-[25rem] rounded-md outline-none border border-black/40 hover:border-[#4ba377]"
                  placeholder="Dress"
                  defaultValue={searchParams.title}
               />
            </div>
            <div>
               <p>Amount:</p>
               <input
                  type="text"
                  name="amount"
                  required
                  className="p-2 w-[25rem] rounded-md outline-none border border-black/40 hover:border-[#4ba377]"
                  placeholder="12"
                  defaultValue={searchParams.amount}
               />
            </div>
            <div>
               <p>Description:</p>
               <textarea
                  name="body"
                  required
                  className="p-2 w-[25rem] rounded-md outline-none border border-black/40 hover:border-[#4ba377]"
                  placeholder="Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum architecto recusandae nihil quas inventore commodi repellat, blanditiis sunt optio aut adipisci facere minus tenetur expedita quia vitae reprehenderit velit! Cumque."
                  defaultValue={searchParams.body}
               />
            </div>
            <div>
               <p>Price:</p>
               <input
                  type="text"
                  name="price"
                  required
                  className="p-2 w-[25rem] rounded-md outline-none border border-black/40 hover:border-[#4ba377]"
                  placeholder="$15000"
                  defaultValue={searchParams.price}
               />
            </div>
            <input type="file" name="file" />
            <button className="bg-[#4ba377] text-white w-[25rem] p-2 rounded-md duration-300 hover:bg-[#70b391]" type="submit">Update</button>
         </form>
      </>
   );
}