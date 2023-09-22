import Link from "next/link";

export default function Main_menu() {
  return (
    <>
      <div className="justify-center items-center flex h-screen bg-gradient-to-b from-slate-400 to-zinc-400">
        <div className="bg-neutral-300 w-1/2 h-1/2 rounded-md text-center text-gray-950 text-2xl">
          <span className="border-b-2 border-b-black font-semibold">Home</span>
          <div className=" grid grid-cols-2 mt-5">
            <div className=" space-y-4 border-2 text-left pl-5 font-semibold border-yellow-500">
              <p className="hover:text-sky-500 active:text-sky-700  w-1/5">
                <Link href="/sales">Sales</Link>
              </p>
              <p className="hover:text-sky-500  w-1/5">
                <Link href="/orders">Orders</Link>
              </p>
              <p className="hover:text-sky-500  w-1/4">
                <Link href="/inventory"> Inventory </Link>
              </p>
              <p className="hover:text-sky-500  w-1/5">
                <Link href="/history">History</Link>
              </p>
            </div>
            <div className="border-2 border-red-500">Test</div>
          </div>
        </div>
      </div>
    </>
  );
}
