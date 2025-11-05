import Image from "next/image";
import shopcart from '@/public/image/1.svg'
import Link from "next/link";
function Introduction() {
   return (
      <div className="grid grid-cols-2 w-[80%] place-items-center mx-auto">
         <section className="flex flex-col gap-7">
            <h1 className="text-5xl font-bold ">WELCOME TO ABDELAHI STORE.</h1>
            <p className="text-md font-extralight">
               Hi everyone, im amirali abdelahi from iran in esfahan city. <br />{" "}
               Click Start Button Please For Push to Shopcart Page| Shopcart
            </p>
            <main className="flex gap-4 w-full [&>*]:text-lg">
               <article className="flex items-center justify-center gap-2">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 bg-[#CCC5B9] rounded-full">
                     <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 12.75 6 6 9-13.5" />
                  </svg>
                  <h1>900+ Player</h1>
               </article>
               <article className="flex items-center justify-cente gap-2">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 bg-[#CCC5B9] rounded-full">
                     <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 12.75 6 6 9-13.5" />
                  </svg>
                  <h1>5000+ Students</h1>
               </article>
            </main>
            <main className="flex gap-4 w-full [&>*]:text-lg">
               <article className="flex items-center justify-cente gap-2">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 bg-[#CCC5B9] rounded-full">
                     <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 12.75 6 6 9-13.5" />
                  </svg>
                  <h1>3000+ Blogs</h1>
               </article>
               <article className="flex items-center justify-center gap-2">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 bg-[#CCC5B9] rounded-full">
                     <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 12.75 6 6 9-13.5" />
                  </svg>
                  <h1>20000+ View</h1>
               </article>
            </main>
            <main className="flex gap-3">
               <Link
                  href="/shopcart"
                  className="w-28 rounded-md font-semibold bg-[#66bd91] py-2 text-center text-white transition-all duration-300 hover:bg-[#4ba377]"
               >
                  Buy
               </Link>
               <button
                  className="w-44 px-4 flex gap-2 font-semibold text-[#66bd91] border border-[#66bd91] justify-center items-center rounded-md py-2 text-center transition-all duration-300 hover:text-[#00b359]"
               >LEARN MORE <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                     <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
                  </svg>
               </button>
            </main>
         </section>
         <Image src={shopcart} alt="" className="size-[500px]" />
      </div>
   );
}

export default Introduction;