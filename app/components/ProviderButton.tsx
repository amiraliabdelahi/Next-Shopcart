import { signIn } from "@/auth";
import Image from 'next/image'
import github from '@/public/buttons/github.png'
import google from '@/public/buttons/google.png'
export function GitButton() {
   return (
      <form action={
         async () => {
            signIn("github", {
               redirect: true,
               redirectTo: "/"
            })
         }
      }>
         <button type="submit">
            <Image className="w-12 h-12" src={github} alt="" />
         </button>
      </form>
   );
}
export function GoogleButton() {
   return (
      <form action="">
         <button type="submit">
            <Image className="w-14 h-14" src={google} alt="" />
         </button>
      </form>
   )
}