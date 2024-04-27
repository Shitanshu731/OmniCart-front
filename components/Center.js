import { Children } from "react";
import styled from "styled-components";

export default function Center({children}){
    const StyledDiv = styled.div`
        max-width : 800px;
        margin : 0 auto;
        padding : 0 20px;
    `
    return(
        <StyledDiv>{children}</StyledDiv>
    )
}