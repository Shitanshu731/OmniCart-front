import styled from "styled-components";
import Center from "./Center";
import Button from "./Button";

export default function Featured() {
    const Bg = styled.div`
        background-color : #222;
        padding : 50px 0;
        color : #fff;
    `;
    const Title = styled.h1`
        margin : 0;
        font-weight : normal;
    `;
    const Desc = styled.p`
        color : #aaa;
        font-size : 0.8rem;
    `;

    const ColumnWrapper = styled.div`
        display : grid;
        grid-template-columns : .9fr 1.1fr;
        gap : 40px;
        img{
            max-width : 100%;
        }
    `;
    const Column = styled.div`
        display : flex;
        align-items : center;
    `
    return (
        <Bg>
        <Center>
        <ColumnWrapper>
        <Column>
        <div>
        <Title>Products</Title>
        <Desc>Lorem Ipsum adsssssssss sadddddddd asssssssssd aaaaaaaaaaaaaaaaaaaaaaaaaaaaadas da da sdasd asd ad adasd asd as das da sdasd asd asd asda sd asd das dasd adadadadadas d sadad</Desc>
        <Button white outline size="l">Read more</Button>
        <Button primary size="l">Add to Cart</Button>
        </div>
        </Column>
        <Column>
        <img src = "https://cdn.pixabay.com/photo/2016/05/05/02/37/sunset-1373171_1280.jpg" />
        </Column>
        </ColumnWrapper>
        </Center>
        </Bg>
    )
}