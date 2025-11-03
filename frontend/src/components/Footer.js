import { Triangle, Pyramid } from "lucide-react";
import Link from "next/link";

export default function Footer() {
  return (
    <>
      <div className="h-80 w-full flex justify-center">
        <div className="h-full w-4/5 border border-t-[#ececec] border-x-0 border-b-0 mt-8 flex px-8 py-12">
          <div className="w-1/5 h-full flex">
            <Link
              href={"/"}
              className="w-8 h-8 rounded-lg border border-[#ececec] bg-white cursor-pointer flex justify-center items-center"
            >
              <Pyramid size={14} />
            </Link>
            <Link href={"/"} className="flex items-center h-8">
              <p className="font-medium uppercase ml-2 text-sm mr-6 cursor-pointer">
                Acme Store
              </p>
            </Link>
          </div>
          <div className="w-4/5 h-full flex flex-col text-sm space-y-3">
            <span className="text-[#737373] hover:underline hover:text-black">
              Home
            </span>
            <span className="text-[#737373] hover:underline hover:text-black">
              About
            </span>
            <span className="text-[#737373] hover:underline hover:text-black">
              Terms & Conditions
            </span>
            <span className="text-[#737373] hover:underline hover:text-black">
              Shipping & Return Policy
            </span>
            <span className="text-[#737373] hover:underline hover:text-black">
              Privacy Policy
            </span>
            <span className="text-[#737373] hover:underline hover:text-black">
              FAQ
            </span>
          </div>
        </div>
      </div>
      <div className="w-full border border-x-0 border-b-0 border-t-[#ececec] flex justify-around text-sm py-4 items-center">
        <span className="text-[#737373]">
          © 2023-2025 ACME, Inc. All rights reserved. &nbsp; &nbsp; | &nbsp;
          &nbsp; View the source
        </span>
        <div className="flex space-x-2 justify-center items-center">
          <span className="text-black">Created by Vercel</span>
          <Triangle fill="black" size={12} />
        </div>
      </div>
    </>
  );
}
