import Link from "next/link";
import { ShoppingCart, Pyramid } from "lucide-react";
export default function Header() {
  return (
    <div className="flex w-full items-center mb-4 ">
      <div className="flex w-1/3 items-center">
        <Link
          href={"/"}
          className="w-10 h-10 rounded-lg border border-[#ececec] bg-white cursor-pointer flex justify-center items-center"
        >
          <Pyramid size={18} />
        </Link>
        <Link href={"/"}>
          <p className="font-medium uppercase ml-2 text-sm mr-6 cursor-pointer">
            Acme Store
          </p>
        </Link>

        <ul className="gap-6 text-sm text-[#737373] flex">
          <li className="hover:text-gray-900 hover:underline cursor-pointer ">
            All
          </li>
          <li className="hover:text-gray-900 hover:underline cursor-pointer ">
            Shirts
          </li>
          <li className="hover:text-gray-900 hover:underline cursor-pointer ">
            Stickers
          </li>
        </ul>
      </div>
      <div className="flex w-1/3 items-center">
        <form className="w-max-[550px] relative w-full">
          <input
            className="text-sm rounded-lg px-4 py-2 text-black placeholder:text-[#737373] bg-white w-full border border-[#ececec]"
            placeholder="Search for products..."
            type="text"
          />
        </form>
      </div>
      <div className="flex w-1/3 items-center justify-end">
        <button className="relative flex h-11 w-11 items-center justify-center rounded-md border border-[#ececec] text-black">
          <ShoppingCart size={18} />
        </button>
      </div>
    </div>
  );
}
