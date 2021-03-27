import styled from "styled-components"
import logo from "../img/logo.svg"
const Navbar = () =>{
    return(
        <Nav>
            <div>
                <img src={logo} alt=""/>
                <h1>ReactMovie</h1>
            </div>
        </Nav>
    );
}

const Nav = styled.nav`
    display: flex;
    justify-content: space-between;
    padding: 20px 10px;
    div{
        display: flex;
        align-items: center;
        h1{
            margin: 0;
            padding: 10px 0 0 5px;
            color: #fff;
            font-weight: 300; 
        }
        img{
            min-width: 40px;
            max-width: 50px;
        }
    }
`

export default Navbar;
