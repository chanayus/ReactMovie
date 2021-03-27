import styled from "styled-components"
import { TweenMax, Expo } from "gsap"
import { Fragment } from "react";
import {useEffect, useRef, useState} from "react"


const Card = ({info, setMovieId, setIsShowDetail, isShowDetail, id}) =>{
    const date = new Date(info.release_date);
    const formatDate = date.getFullYear();
    const [isImgLoad, setIsImgLoad] = useState(true)
    let cardAnim = useRef(null);

    const viewDetail = () => {
        setMovieId(info.id)
        setIsShowDetail(!isShowDetail)
    }
    useEffect(() => {
        TweenMax.to(cardAnim, 0, {scale: 0, delay: 0})
        TweenMax.to(cardAnim, 0.8, {scale: 1, delay: id/25, ease: Expo.easeOut})
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])
    

    return(
        <Fragment>
            <Item 
                ref={(el) => {cardAnim = el}} 
                onClick={() => viewDetail()} 
                className="poster"
            >
                {isImgLoad ? 
                    <Loader>
                        <div className="load-icon">
                            <div></div>
                            <div></div>
                            <div></div>
                        </div>
                    </Loader>
                : null
                }
                <img src={`https://image.tmdb.org/t/p/w500/${info.poster_path}`} onLoad={() => setIsImgLoad(false)} alt="poster-img" loading="lazy"/>
                <div className="content">
                    <div className="text">
                        <h2>{info.title}</h2>
                        <h3 style={{fontWeight: 300}}>{formatDate}</h3>
                        <button onClick={() => console.log(isImgLoad)}>View Detail</button>
                    </div>
                </div>
            </Item>
        </Fragment>
    );
}

const Item = styled.div`
    width: 290px;
    height: 435px;
    margin: 40px 2.5vmin;
    // overflow: hidden;
    box-shadow: 0 10px 20px rgba(0,0,0,0.19), 0 6px 6px rgba(0,0,0,0.23);
    position: relative;
    @media only screen and (max-width: 640px){
        width: 180px;
        height: 265px;

    }
    img{
        position: relative;
        z-index: -50;
    }  
    .content{
        text-align: center;
        transition: 0.2s;
        background: red;
        position: absolute;
        top: 0;
        width: 100%;
        background: rgb(0,0,0,0.7);
        height: 100%;
        opacity: 0;
        .text{
            position: absolute;
            width: 100%;
            top: 50%; 
            right: 50%;
            transform: translate(50%,-50%);
            transition: 0.25s;
            h2, h3{
                margin: 0;
                font-weight: 600;
                padding: 0;
            }
        }
    }
    :hover .content{
        opacity: 1;
        -webkit-backdrop-filter: blur(10px);
        backdrop-filter: blur(10px);
        
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

const Loader = styled.div`
    width:100%;
    height:100%;
    position: relative;
    z-index: 5000000;
    background: #111;
`


export default Card;
