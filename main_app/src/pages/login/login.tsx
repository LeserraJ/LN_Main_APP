import Link from "next/link";

export default function Login_page() {
  return (
    <>
      <div className="flex h-screen flex-col justify-center items-center">
        <div className="text-center mb-5">
          <h1 className="font-bold">Welcome, Please Login</h1>
        </div>
        <div className="grid grid-rows-2 gap-2 py-3 border-2 border-red-500 justify-center text-center w-full">
          <form className=" space-x-2">
            <label>Username:</label>
            <input title="username" placeholder="Enter Username"></input>
          </form>
          <form className="space-x-3">
            <label>Password:</label>
            <input title="password" placeholder="Enter Password"></input>
          </form>
          <div className="grid grid-rows-2 gap-2 my-2 border-2 border-blue-500">
            <button className="py-2" type="submit" title="login_button">
              Login
            </button>
            <p className="py-.5">
              <Link href="/">Forgot Username or Password?</Link>
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
