import Card from "../component/Card"
import styled from "styled-components"
import Navbar from "../component/Navbar"
import Pagintion from "../component/Pagintion"
import MovieDetail from "./movieDetail"
import { motion } from "framer"
import {useEffect, useState} from "react"

const Home = () => {
  const [movieData, setMovieData] = useState([]);
  const [page, setPage] = useState(1);
  const [movieId, setMovieId] = useState(527774);
  const [isShowDetail, setIsShowDetail] = useState(false)
  const [isLoading, setIsLoading] = useState(true)
  const key = "6b29182f00bfc09b98e618852a1a2c05";
  
  useEffect(() => {
      const fetchMovie = async() =>{
        const data = await fetch(`https://api.themoviedb.org/3/discover/movie?api_key=${key}&language=en-US&sort_by=popularity.desc&page=${page}`);
        const json = await data.json();
        setMovieData(json.results)
        setIsLoading(false)
      }
      window.scroll(0, 0);
      fetchMovie();
  }, [page])
  return (
    !isLoading ? 
    <motion.div className="App" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5 }}  style={isShowDetail ? {overflowY: "hidden", height: "100vh"} : null}>
      <Navbar/>
      <div className="card-container" >  
        {
          movieData.map((value, index) => <Card info={value} key={index} id={index+1} setMovieId={setMovieId} setIsShowDetail={setIsShowDetail} isShowDetail={isShowDetail}/>)
        }   
      </div>
      <Pagintion page={page} setPage={setPage}/>
      {isShowDetail ? <MovieDetail id={movieId} setIsShowDetail={setIsShowDetail}/> : null}
    </motion.div>
    : <LoadScreen>
       <div className="load-icon">
          <div></div>
          <div></div>
          <div></div>
        </div>
    </LoadScreen>
  );
}

const LoadScreen = styled.div`
  width: 100%;
  height: 100vh;
  background: #111;
`

export default Home;
