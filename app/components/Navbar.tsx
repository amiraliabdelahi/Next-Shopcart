import { auth } from "@/auth";
import { user_role } from "@prisma/client";
import Link from "next/link";
import { SignoutButton } from "./SignoutButton";

async function Navbar() {
  const session = await auth();
  const user = session?.user;
  return (
    <nav className="flex justify-between text-[#CCC5B9] items-center px-12 py-6">
      <Link className="text-3xl font-extrabold text-[#2f8a62] " href="/">
        Abdelahi Store
      </Link>
      <div className="flex gap-10 justify-center items-center">
         <Link
           className="text-black hover:text-[#66bd91] font-bold text-sm transition-all duration-100"
           href="/contact"
         >
           Contact us
         </Link>
         <Link
           className="text-black hover:text-[#66bd91] font-bold text-sm transition-all duration-100"
           href="/about"
         >
           About me
         </Link>
         {session?.user?.role == user_role.ADMIN && (
           <Link
             className="text-black hover:text-[#66bd91] font-bold text-sm transition-all duration-100"
             href="/admin"
           >
             Manage
           </Link>
         )}
         {user ? (
           <SignoutButton />
         ) : (
           <Link
             href="/login"
             className="font-bold text-black text-sm transition-all text-md duration-200 hover:text-[#66bd91]"
           >
             Login
           </Link>
         )}
      </div>
      {user ? (
        <Link
          className="text-[#2f8a62] transition-all duration-100"
          href="/shopcart"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-7 h-7"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z"
            />
          </svg>
        </Link>
      ) : (
        <Link
          href="/signup"
          className="border border-[#4ba377] text-[#4ba377] text-sm transition-colors font-semibold py-2 rounded-md px-6"
        >
          Register
        </Link>
      )}
    </nav>
  );
}

export default Navbar;
