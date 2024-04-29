import styled from "styled-components";
import Center from "./Center";
import Button from "./Button";

export default function Featured({product}) {
  const Bg = styled.div`
    background-color: #222;
    padding: 50px 0;
    color: #fff;
  `;
  const Title = styled.h1`
    margin: 0;
    font-weight: normal;
  `;
  const Desc = styled.p`
    color: #aaa;
    font-size: 0.8rem;
  `;

  const ColumnWrapper = styled.div`
    display: grid;
    grid-template-columns: 0.9fr 1.1fr;
    gap: 40px;
    img {
      max-width: 100%;
    }
  `;
  const Column = styled.div`
    display: flex;
    align-items: center;
  `;
  const ButtonsWrapper = styled.div`
    display: flex;
    gap: 10px;
    margin-top : 10px;
  `;
  return (
    <Bg>
      <Center>
        <ColumnWrapper>
          <Column>
            <div>
              <Title>{product.title}</Title>
              <Desc>
                {product.description}
              </Desc>
              <ButtonsWrapper>
                <Button white="true" outline="true" >
                  Read more
                </Button>
                <Button primary="true" >
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
                  Add to Cart
                </Button>
              </ButtonsWrapper>
            </div>
          </Column>
          <Column>
            <img src={product.images[1]} alt={product?.title} />
          </Column>
        </ColumnWrapper>
      </Center>
    </Bg>
  );
}
