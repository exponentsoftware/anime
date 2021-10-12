import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import DataUI from "./DataUI";

function Data() {
  const [movie, setMovie] = useState([]);

  const { id } = useParams();

  const getMovie = async () => {
    await axios
      .get(`https://api.aniapi.com/v1/anime/${id}`)
      .then((res) => res.data)
      .then((data) => data.data)
      .then((data) => setMovie(data));
  };

  useEffect(() => {
    getMovie();
    // eslint-disable-next-line
  }, []);

  
  return (
   <DataUI
    trailer={movie.trailer_url} 
    year={movie.season_year} 
    duration={movie.episode_duration} 
    coverImage={movie.cover_image}/>
  );
}

export default Data;
