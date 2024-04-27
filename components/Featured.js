import styled from "styled-components";
import Center from "./Center";
import PrimaryBtn from "./PrimaryBtn";

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

    const Wrapper = styled.div`
        display : grid;
        grid-template-columns : 1fr 1fr;
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
        <Wrapper>
        <Column>
        <div>
        <Title>Products</Title>
        <Desc>Lorem Ipsum adsssssssss sadddddddd asssssssssd aaaaaaaaaaaaaaaaaaaaaaaaaaaaadas da da sdasd asd ad adasd asd as das da sdasd asd asd asda sd asd das dasd adadadadadas d sadad</Desc>
        <button>Read more</button>
        <PrimaryBtn size="l">Add to Cart</PrimaryBtn>
        </div>
        </Column>
        <Column>
        <img src = "https://cdn.pixabay.com/photo/2016/05/05/02/37/sunset-1373171_1280.jpg" />
        </Column>
        </Wrapper>
        </Center>
        </Bg>
    )
}