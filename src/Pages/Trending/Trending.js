import React, { useEffect, useState } from "react";
import axios from "axios";
import "./trending.css";
import SingleContent from "../../components/singleContent/SingleContent";

const Trending = () => {
  const [content, setContent] = useState([]);
  const fetchTrending = async () => {
    const { data } = await axios.get(
      `https://api.themoviedb.org/3/trending/movie/week?api_key=ec470816e16822f85cfa90a282c2fc75`
    );
    setContent(data.results);
  };

  useEffect(() => {
    fetchTrending();
  }, []);
  return (
    <>
      <div>
        <p className="pageTitle">Trending</p>
      </div>
      <div className="trending">
        {content &&
          content.map((data) => (
            <SingleContent
              key={data.id}
              id={data.id}
              poster={data.poster_path}
              title={data.title}
              date={data.release_date}
              vote_average={data.vote_average}
            />
          ))}
      </div>
    </>
  );
};

export default Trending;
