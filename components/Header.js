import Link from "next/link"

export default function Header(){
    return (
        <div>
            <Link href={'/'}>Ecommerce</Link>
            <nav>
                <Link href={'/'}>Home</Link>
                <Link href={'/products'}>All Products</Link>
                <Link href={'/categories'}>Categories</Link>
                <Link href={'/cart'}>Cart(0)</Link>
            </nav>
        </div>
    )
}