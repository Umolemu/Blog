"use client";
import "@/app/ui/login/loginPage.css"
import { signIn, useSession } from "next-auth/react"
;
import { useRouter } from "next/navigation";
export default function Login() {
  
  const {data,status} = useSession();
  const router = useRouter();

  console.log(data, status);
  if(status === "loading") return <div>Loading...</div>
  
  if(status === "authenticated") router.push("/");
  return (
    <div className="flex items-center justify-center mt-16">
      <div className="wrapper bg-gray-300 pt-[150px] pb-[150px] pl-[200px] pr-[200px] flex flex-col gap-[50px] rounded-lg text-white">
        <div className="socialButton p-5 rounded-md border-none color-white font-bold cursor-pointer flex items-center justify-center bg-orange-500" onClick={() => signIn("google")}>Sign in with Google</div>
        <div className="socialButton p-5 rounded-md border-none color-white font-bold cursor-pointer flex items-center justify-center bg-black">Sign in with Github</div>
        <div className="socialButton p-5 rounded-md border-none color-white font-bold cursor-pointer flex items-center justify-center bg-blue-500">Sign in with Facebook</div>
      </div>
    </div>
  );
}
