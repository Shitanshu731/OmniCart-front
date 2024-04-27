import styled from "styled-components"
import css from "styled-jsx/css"

export default function Button ({children,...rest}){
    const StyledBtn = styled.button`
        
        border : 0;
       
        cursor : pointer;
        border-radius : 5px;
        padding : 5px 15px;
        ${props => props.primary && css`
        background-color : #5542F6;
        color : #fff;
        `}
        ${props => props.white && !props.outline && css`
        background-color : #fff;
        color : #000;
        `}
        ${props => props.white && props.outline && css`
        border : 1px solid #fff;
        background-color : transparent;
        color : #fff;
        `}
        ${props => props.size === "l" && css`
            padding : 10px 20px;
            font-size : 1.2rem;
        `}
    `
    return(
        <StyledBtn {...rest}>{children}</StyledBtn>
    )
}