import styled from "styled-components"
import css from "styled-jsx/css"

export default function PrimaryBtn ({children,...rest}){
    const StyledBtn = styled.button`
        background-color : #5542F6;
        border : 0;
        color : #fff;
        cursor : pointer;
        border-radius : 5px;
        padding : 5px 15px;
        ${props => props.size === "l" && css`
            padding : 10px 20px;
            font-size : 1.2rem;
        `}
    `
    return(
        <StyledBtn {...rest}>{children}</StyledBtn>
    )
}