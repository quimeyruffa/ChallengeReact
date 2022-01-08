import styled from "styled-components"

const Footer = () => {
    return (
        <ContainerFooter>
            <p>@copyright</p>
            <p>All rights reserved</p>
        </ContainerFooter>
    )
}

export default Footer

const ContainerFooter = styled.div`
    display: flex;
    width: calc(100% - 2em);
    height: 30px;
    justify-content:space-between;
    align-items:center;
    font-size:bold;
    padding:1em;
    background: rgb(44,35,70);
    color: darkorange;
    position: absolute;
    bottom: 0;
`