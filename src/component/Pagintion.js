import styled from "styled-components"

const Pagintion = ({page, setPage}) =>{
    return(
        <Flex>
            <button onClick={() => setPage(page-1)} disabled={page-1 === 0 ? true : false}>Prev</button>
            <button onClick={() => setPage(page+1)}>Next</button>
        </Flex>
    );
}

const Flex = styled.nav`
    display: flex;
    justify-content: center;
    padding: 75px 0;
    button{
        border: none;
        width: 70px;
        height: 50px;
        margin: 0 15px;
        font-weight: bold;
    }
`

export default Pagintion;
