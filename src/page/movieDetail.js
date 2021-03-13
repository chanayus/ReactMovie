import styled from "styled-components"
import {useEffect, useState} from "react"
const MovieDetail = ({id, setIsShowDetail}) =>{
    const [movieData, setMovieData] = useState({"genres": []});
    const [visible, setVisible] = useState();
    const key = "6b29182f00bfc09b98e618852a1a2c05";
    useEffect(() => {
        const fetchMovie = async() =>{
          const data = await fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=${key}&language=en-US`);
          const json = await data.json();
          setMovieData(json)
          setVisible(1)
        }
        window.scroll(0, 0);
        fetchMovie();
    }, [id])

    const closeHandle = () =>{
        setVisible(0)
        setTimeout(() => setIsShowDetail(false), 250);

    }
    const mainStyle = {
        position: "absolute",
        width: "100%",
        top: 0,
        background: "#000",
        transition: "0.25s",
        animation: "fade 0.25s",
        opacity: visible
    }
    return(
        <div style={mainStyle}>
            <ImgHeader style={{backgroundImage: `url(https://image.tmdb.org/t/p/original/${movieData.backdrop_path})`}}>
               
                <Header className="container">
                    <HeaderContent>
                        <Poster>
                            <img src={`https://image.tmdb.org/t/p/original/${movieData.poster_path}`} alt=""/>
                        </Poster>
                        <h1>{movieData.title}</h1>
                        <h2 className="text-light">{movieData.tagline}</h2>
                    </HeaderContent>
                </Header>
                <DarkEffect className="dark-filter">
                    <CloseButton onClick={() => closeHandle()}>X</CloseButton>
                </DarkEffect>
            </ImgHeader>
            
            <Content className="content">
                <div className="container">
                    <p style={{padding: "0 3%", fontSize: "1.25rem"}}>{movieData.overview}</p>
                    <Detail>
                        <div>

                            <h2>Genres</h2>
                            <h3 className="text-light">{movieData.genres.map((value,index) => index === movieData.genres.length-1 ? value.name : value.name+", ")} </h3>

                            <h2>runtime</h2>
                            <h3 className="text-light">{movieData.runtime} m</h3>

                            <h2>Release date</h2>
                            <h3 className="text-light">{movieData.release_date}</h3>

                            <h2>Budget</h2>
                            <h3 className="text-light">{movieData.budget} USD</h3>

                            
                        </div>
                        <Score>
                            <h2>Average Score</h2>
                            <h1>{movieData.vote_average}</h1>
                        </Score>
                    </Detail>
                </div>
            </Content>        
        </div>
    );
}

const Header = styled.div`
    display: flex;
    align-items: flex-end;
    height: 100%;
`
const Poster = styled.div`
    width: 36vmin;

`
const Content = styled.div`
   padding-top: 75px;
   background: linear-gradient(180deg, rgba(0,0,0,1) 2%, rgba(0,0,0,0) 100%);
`
const ImgHeader=styled.div`
    background-size: cover;
    background-position: 50% 25%;

    background-repeat: no-repeat;
    width: 100%;
    height: 93vmin;
    animation: fade 0.55s;
    position: relative;
`
const HeaderContent = styled.div`
    z-index: 1;    
    width: 100%;
    h1{
        font-size: 7vmin;
        text-shadow: 2px 4px 3px rgba(0,0,0,0.3);
        margin: 10px 0;
    }
    h2{
        font-size: 2.25vmax; 
        margin: 0;
        font-weight: 300;
        text-shadow: 2px 4px 3px rgba(0,0,0,0.3);
    }
`
const DarkEffect = styled.div`
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0px;
    background: rgb(0,0,0,0.5);
    background: linear-gradient(0deg, rgba(0,0,0,1) 0%, rgba(0,0,0,0) 100%);
`

const Detail = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
    padding: 50px 0;
`

const Score = styled.div`
    border: 6px solid #FFF;
    border-radius: 1000px;
    width: 31vmin;
    height: 31vmin;
    display:flex;
    flex-direction: column;
    justify-content: center;
    align-items:center;
    h1{
        font-size: 10vmin;
    }
    h2{
        font-weight: 300;
        font-size: 3.25vmin;
    }
`

const CloseButton = styled.button`
    margin: 20px;
    background :red;
    border: none;
    background: #FFF;
    font-size: 1.5rem;
    width: 35px;
    height: 35px;
    cursor: pointer;
    z-index: 1000;
    border-radius: 50%;
    box-shadow: 0 10px 20px rgba(0,0,0,0.19), 0 6px 6px rgba(0,0,0,0.23);
`
export default MovieDetail;
