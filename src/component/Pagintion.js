import styled from "styled-components"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons'
const Pagintion = ({page, setPage}) =>{
    return(
        <Flex>
            <button onClick={() => setPage(page-1)} disabled={page-1 === 0 ? true : false}><FontAwesomeIcon  icon={faChevronLeft} style={{color: "#222", fontSize: 20}}/></button>
                <h1>{page}</h1>
            <button onClick={() => setPage(page+1)}><FontAwesomeIcon  icon={faChevronRight} style={{color: "#222", fontSize: 20}}/></button>
        </Flex>
    );
}

const Flex = styled.nav`
    display: flex;
    justify-content: center;

    align-items: center;
    padding: 75px 0;
    h1{
        margin: 0 1%;
    }
    button{
        border: none;
        width: 55px;
        height: 55px;
        margin: 0 20px;
        font-weight: bold;
        border-radius: 50%;
    }
`

export default Pagintion;
