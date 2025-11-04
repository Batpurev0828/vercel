import { Inter } from "next/font/google";
import Marquee from "react-fast-marquee";
import Header from "@/components/Header";
import Image from "next/image";
import Link from "next/link";
import SlidingImage from "@/components/ImageFloat";
import products from "@/data/products.json";
import Footer from "@/components/Footer";

const inter = Inter({
  subsets: ["latin"],
});

export default function Home() {
  return (
    <div
      className={`w-screen h-fit min-h-screen flex flex-col items-center py-4 px-6 text-black bg-[#fafafa] ${inter.className}`}
    >
      <Header />

      <div className="grid grid-cols-3 grid-rows-2 max-h-[calc(100vh-200px)] h-full px-4 pb-4 gap-4 w-full max-w-screen-2xl">
        <Link
          href={"/products/Acme_Circles_T-Shirt"}
          className="cursor-pointer relative col-span-2 row-span-2 aspect-square border-[#ececec] hover:border-blue-400 border bg-white w-full h-full rounded-xl flex items-center justify-center overflow-hidden group"
        >
          <Image
            height={720}
            width={720}
            alt="1"
            src="/products/t-shirt-circles-black.png"
            className="transition-transform duration-300 ease-in-out group-hover:scale-110"
          />
          <div className="rounded-full w-fit p-1 pl-2 text-xs border border-[#ececec] bg-white absolute bottom-5 left-5 font-semibold flex items-center justify-center">
            <h3 className="mr-2">Acme Circles T-shirt</h3>
            <div className="bg-blue-600 p-2 rounded-full text-white">
              $20.00 USD
            </div>
          </div>
        </Link>

        <Link
          href={"/products/Acme_Drawstring_Bag"}
          className="cursor-pointer relative col-start-3 row-start-1 aspect-square border-[#ececec] hover:border-blue-400 border bg-white w-full h-full rounded-xl flex items-center justify-center overflow-hidden group"
        >
          <Image
            height={360}
            width={360}
            alt="1"
            src="/products/bag-black.png"
            className="transition-transform duration-300 ease-in-out group-hover:scale-110"
          />
          <button className="rounded-full w-fit p-1 pl-2 text-xs border border-[#ececec] bg-white absolute bottom-5 left-5 font-semibold flex items-center justify-center">
            <h3 className="mr-2">Acme Drawstring Bag</h3>
            <div className="bg-blue-600 p-2 rounded-full text-white">
              $12.00 USD
            </div>
          </button>
        </Link>

        <Link
          href={"/products/Acme_Cup"}
          className="cursor-pointer relative col-start-3 row-start-2 aspect-square border-[#ececec] hover:border-blue-400 border bg-white w-full h-full rounded-xl flex items-center justify-center overflow-hidden group"
        >
          <Image
            height={360}
            width={360}
            alt="1"
            src="/products/cup-black.png"
            className="transition-transform duration-300 ease-in-out group-hover:scale-110"
          />
          <button className="rounded-full w-fit p-1 pl-2 text-xs border border-[#ececec] bg-white absolute bottom-5 left-5 font-semibold flex items-center justify-center">
            <h3 className="mr-2">Acme Cup</h3>
            <div className="bg-blue-600 p-2 rounded-full text-white">
              $15.00 USD
            </div>
          </button>
        </Link>
      </div>
      <Marquee className="space-x-8">
        {products.map((product, idx) =>
          product.pictures ? (
            <SlidingImage
              key={idx}
              pic={product.pictures[0]}
              title={product.title}
              price={product.price}
              name={product.name}
            />
          ) : (
            <SlidingImage
              key={idx}
              pic={product.colors[0].pictures[0]}
              title={product.title}
              price={product.price}
              name={product.name}
            />
          )
        )}
      </Marquee>
      <Footer />
    </div>
  );
}
