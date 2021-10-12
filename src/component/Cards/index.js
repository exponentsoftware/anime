import React, { useEffect, useState } from "react";
import { Flex } from "@chakra-ui/react";
import axios from "axios";
import Anime from "./Anime";

function Cards() {
  const animeApi=`https://api.aniapi.com/v1/anime`;
  const [animeList, setAnimeList] = useState([]);

  const getAnime = async (animeApi) => {
    await axios.get(animeApi).then((res) => {
      setAnimeList(res.data.data.documents);
      // console.log(res.data);
    });
  };

  useEffect(() => {
    getAnime(animeApi);
    // eslint-disable-next-line
  }, []);

  return (
    <>
      <Flex flexWrap="wrap" m={4} px={2} style={{ gap: "10px" }}>
        {animeList.map((item) => (
          <Anime
            key={item.anilist_id}
            id={item.id}
            title={item.titles.en}
            genres={item.genres[0]}
            episodes={item.episodes_count}
            year={item.season_year}
            descriptions={
              item.descriptions.en ? item.descriptions.en : "descriptions : N/A"
            }
            cover_image={item.cover_image}
          />
        ))}
      </Flex>
    </>
  );
}

export default Cards;
