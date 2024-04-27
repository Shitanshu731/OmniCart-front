import Link from "next/link";
import styled from "styled-components";
import Center from "./Center";

export default function Header() {
  const StyledHeader = styled.header`
    background-color: #222;
  `;
  const Logo = styled(Link)`
    color: #fff;
    text-decoration: none;
  `;
  const NavLink = styled(Link)`
    color: #aaa;
    text-decoration: none;
  `;
  const Wrapper = styled.div`
    display: flex;
    justify-content: space-between;
  `;
  const StyledNav = styled.nav`
  display : flex;
  gap : 10px;
  `;
  return (
    <StyledHeader>
      <Center>
        <Wrapper>
          <Logo href={"/"}>Ecommerce</Logo>
          <StyledNav>
            <NavLink href={"/"}>Home</NavLink>
            <NavLink href={"/products"}>All Products</NavLink>
            <NavLink href={"/categories"}>Categories</NavLink>
            <NavLink href={"/account"}>Account</NavLink>
            <NavLink href={"/cart"}>Cart(0)</NavLink>
          </StyledNav>
        </Wrapper>
      </Center>
    </StyledHeader>
  );
}
