import "@/app/ui/login/loginPage.css"
export default function Login() {
  return (
    <div className="flex items-center justify-center mt-16">
      <div className="wrapper bg-gray-300 pt-[150px] pb-[150px] pl-[200px] pr-[200px] flex flex-col gap-[50px] rounded-lg text-white">
        <div className="socialButton p-5 rounded-md border-none color-white font-bold cursor-pointer flex items-center justify-center bg-orange-500">Sign in with Google</div>
        <div className="socialButton p-5 rounded-md border-none color-white font-bold cursor-pointer flex items-center justify-center bg-black">Sign in with Github</div>
        <div className="socialButton p-5 rounded-md border-none color-white font-bold cursor-pointer flex items-center justify-center bg-blue-500">Sign in with Facebook</div>
      </div>
    </div>
  );
}
