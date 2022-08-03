import React, { useState, useEffect } from "react";
import axios from "axios";
import "./search.css";
import TextField from "@mui/material/TextField";
import { Button } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import SingleContent from "../../components/singleContent/SingleContent";
const Search = () => {
  const [searchText, setSearchText] = useState("");
  const [content, setContent] = useState();

  const fetchSearch = async () => {
    const { data } = await axios.get(
      `https://api.themoviedb.org/3/search/movie?api_key=ec470816e16822f85cfa90a282c2fc75&query=${searchText}&page=1`
    );

    setContent(data.results);
  };

  useEffect(() => {
    fetchSearch();
  }, []);
  return (
    <>
      <div style={{ display: "flex", margin: "15px 0" }}>
        <TextField
          style={{
            flex: 1,
            backgroundColor: "white",
          }}
          id="searchBox"
          label="Search"
          variant="filled"
          onChange={(e) => setSearchText(e.target.value)}
        />
        <Button
          variant="contained"
          style={{ marginLeft: 10 }}
          onClick={fetchSearch}
        >
          <SearchIcon />
        </Button>
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
        {searchText && !content && <h2>No found movie</h2>}
      </div>
    </>
  );
};

export default Search;
