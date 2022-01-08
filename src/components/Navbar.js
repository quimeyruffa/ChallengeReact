import styled from 'styled-components'
import { Link } from "react-router-dom";


const Navbar = () => {
    return (
        <NavbarContainer>
            <NavLink to="/">Home</NavLink>
            <NavLink to="data">About</NavLink>
        </NavbarContainer>
    )
}

export default Navbar

const NavbarContainer = styled.div`
    display: flex;
    position: fixed;
    justify-content: flex-end;
    align-items: center;
    padding: 2em;
    width: 100vw;
    background-color:transparent;
    
`

const NavLink = styled(Link)`
    text-decoration: none;
    font-weight: bold;
    font-size:18px;
    font-family: 'Lato', sans-serif;
    margin-left:50px;
    margin-right:150px;
    color:white;
    opacity: 0.8;
    &:hover{
        opacity: 1;
    }
`