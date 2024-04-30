import Link from "next/link";
import Center from "./Center";
import { useContext } from "react";
import { CartContext } from "./CartContext";

export default function Header() {
  const {cartProducts} = useContext(CartContext);
  return (
    <header className="bg-[#222] text-white">
      <Center>
        <div className="flex justify-between">
          <Link href={"/"}>Ecommerce</Link>
          <nav className="flex gap-[15px]">
            <Link className="text-[#aaa] decoration-none" href={"/"}>Home</Link>
            <Link className="text-[#aaa] decoration-none" href={"/products"}>All Products</Link>
            <Link className="text-[#aaa] decoration-none" href={"/categories"}>Categories</Link>
            <Link className="text-[#aaa] decoration-none" href={"/account"}>Account</Link>
            <Link className="text-[#aaa] decoration-none" href={"/cart"}>Cart ({cartProducts.length}) </Link>
          </nav>
        </div>
      </Center>
    </header>
  );
}
