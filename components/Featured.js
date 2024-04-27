import styled from "styled-components";
import Center from "./Center";

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
    return (
        <Bg>
        <Center>
        <Title>Products</Title>
        <Desc>Lorem Ipsum adsssssssss sadddddddd asssssssssd aaaaaaaaaaaaaaaaaaaaaaaaaaaaadas da da sdasd asd ad adasd asd as das da sdasd asd asd asda sd asd das dasd adadadadadas d sadad</Desc>
        </Center>
        </Bg>
    )
}