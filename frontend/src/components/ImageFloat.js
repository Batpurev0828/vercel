import Link from "next/link";
export default function SlidingImage(props) {
  return (
    <div
      className={`w-[480px] h-60 border border-[#ececec] shadow-sm mx-2 rounded-xl hover:border-blue-400 relative`}
    >
      <Link
      href={`/products/${props.name}`}
      >
        <img src={props.pic} className="w-full h-full object-contain"></img>
        <button className="rounded-full w-fit p-1 pl-2 text-xs border border-[#ececec] bg-white absolute bottom-5 left-5 font-semibold flex items-center justify-center">
          <h3 className="mr-2">{props.title}</h3>
          <div className="bg-blue-600 p-2 rounded-full text-white">
            {`$${props.price} USD`}
          </div>
        </button>
      </Link>
    </div>
  );
}
