import styled from "styled-components"
import { Fragment } from "react";
const Card = ({info, setMovieId, setIsShowDetail, isShowDetail}) =>{
    const date = new Date(info.release_date);
    const formatDate = date.getFullYear();

    const viewDetail = () => {
        setMovieId(info.id)
        setIsShowDetail(!isShowDetail)
    }
    return(
        <Fragment>
            <Item style={{backgroundImage: `url(https://image.tmdb.org/t/p/w500/${info.poster_path})`}} className="poster">
                <div className="content">
                    <div className="text">
                        <h2>{info.title}</h2>
                        <h3 style={{fontWeight: 300}}>{formatDate}</h3>
                        <button onClick={() => viewDetail()}>View Detail</button>
                    </div>
                </div>
            </Item>
            
        </Fragment>
    );
}
const Item = styled.div`
    width: 320px;
    height: 500px;
    background-size: 100% 100%;
    margin: 40px 2.5vmin;
    transition: 0.25s;
    box-shadow: 0 10px 20px rgba(0,0,0,0.19), 0 6px 6px rgba(0,0,0,0.23);
    .text{
        position: absolute;
        bottom: 0;
        transition: 0.25s
    }
    .content{
        opacity: 0;
        top: 50%;
        left:50%;
        transition: 0.25s;
        text-align: center;
        display:flex;
        align-items:center;
        justify-content:center;
        z-index: 40;
        flex-direction: column;
        height: 100%;
        color: #FFF; 
        background: rgb(0,0,0,.75);
        h2, h3{
            margin: 0;
            font-weight: 600;
            padding: 0;
        }
    }
    :hover .content{
        opacity: 1;
        
    }
    :hover{
        transform: scale(1.05)
    }
    :hover .text{
        bottom: 40%;
    }
    button{
        cursor: pointer;
        font-size: 1rem;
        margin: 15px 0;
        padding: 10px 20px;
        border-radius: 50px;
        color: #FFF;
        border: 2px solid #FFF;
        background: none;
        transition: 0.25s;
        outline:none;
    }
    button:hover{
        background: #FFF;
        color: #111;
    }
`
export default Card;
