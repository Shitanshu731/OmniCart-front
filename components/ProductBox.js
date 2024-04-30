import { useContext } from "react";
import { CartContext } from "./CartContext";
import Link from "next/link";

export default function ProductBox({ _id, title, description, images, price }) {
  const {addProduct} = useContext(CartContext);
  const url = '/product/'+ _id;
  return (
    <div className="">
      <div className="gap-5 flex">
        <Link href={url} className="border-2 border-slate-200 p-10 rounded-lg   w-[270px] h-[150px] items-center flex justify-center shadow-lg  bg-slate-300 ">
          <img className="w-[70%]" src={images[0]} alt={title} />
        </Link>
      </div>
      <h1 className=" font-bold text-lg">{title}</h1>
      <div className="flex justify-between items-center">
      <h2 className="font-bold ">₹{price}</h2>
      <button className="bg-blue-500 border-2 shadow-lg  rounded-sm p-2 flex gap-[10px] " onClick={() => addProduct(_id)}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="1.5"
          stroke="currentColor"
          className="w-6 h-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z"
          />
        </svg>
      </button>
      </div>
    </div>
  );
}
