import Link from "next/link";
import Center from "./Center";

export default function Header() {
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
            <Link className="text-[#aaa] decoration-none" href={"/cart"}>Cart(0)</Link>
          </nav>
        </div>
      </Center>
    </header>
  );
}
