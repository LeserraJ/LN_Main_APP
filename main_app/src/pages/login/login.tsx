import Link from "next/link";

export default function Login_page() {
  return (
    <>
      <div className="flex h-screen flex-col justify-center items-center bg-gradient-to-b from-slate-400 to-zinc-400">
        <div className="bg-gray-300 rounded-md px-2 py-2">
        <div className="text-center mb-5 ">
          <h1 className="font-bold">Welcome, Please Login</h1>
        </div>
        <div className="grid grid-rows-2 gap-2 py-3 justify-center text-center w-full">
          <form className=" space-x-2">
            <label className="text-gray-800">Username:</label>
            <input className="rounded-full text-center" title="username" placeholder="Enter Username"></input>
          </form>
          <form className="space-x-3.5">
            <label className="text-gray-800">Password:</label>
            <input className="rounded-full text-center" title="password" placeholder="Enter Password"></input>
          </form>
          <div className="grid grid-rows-2 gap-2 my-2 ">
            <button className="py-2 bg-emerald-400 hover:bg-emerald-600 rounded-full" type="submit" title="Login">
              Login
            </button>
            <p className="py-.5">
              <Link className="font-bold text-gray-800 hover:text-sky-500 "href="/">Forgot Username or Password?</Link>
            </p>
          </div>
        </div>
        </div>
       
      </div>
    </>
  );
}
