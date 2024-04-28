import Link from "next/link";
import styled from "styled-components";
import Center from "./Center";

export default function Header() {
  // const  = styled.header`
  //   background-color: #222;
  // `;
  // const Logo = styled(Link)`
  //   color: #fff;
  //   text-decoration: none;
  // `;
  // const NavLink = styled(Link)`
  //   color: #aaa;
  //   text-decoration: none;
  // `;
  // const Wrapper = styled.div`
  //   display: flex;
  //   justify-content: space-between;
  // `;
  // const StyledNav = styled.nav`
  // display : flex;
  // gap : 15px;
  // `;
  return (
    <>
      <div>
        <div>
          <Link href={"/"}>Ecommerce</Link>
          <nav>
            <Link href={"/"}>Home</Link>
            <Link href={"/products"}>All Products</Link>
            <Link href={"/categories"}>Categories</Link>
            <Link href={"/account"}>Account</Link>
            <Link href={"/cart"}>Cart(0)</Link>
          </nav>
        </div>
      </div>
    </>
  );
}
