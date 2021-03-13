import styled from "styled-components"

const Navbar = () =>{
    return(
        <Nav>
            <h1>ReactMovie</h1>
        </Nav>
    );
}

const Nav = styled.nav`
    display: flex;
    justify-content: space-between;
    padding: 20px 10px;
    h1{
        margin:0;
        color: #fff;
        font-weight: 300;
    }
`

export default Navbar;
