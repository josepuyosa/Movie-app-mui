import { Badge } from "@mui/material";
import React from "react";
import TransitionsModal from "../modal/Modal";
import "./singleContent.css";

const SingleContent = ({ id, poster, title, date, vote_average }) => {
  return (
    <TransitionsModal id={id}>
      <Badge badgeContent={`⭐${vote_average}`} color="primary" />
      <img
        className="poster"
        src={`https://image.tmdb.org/t/p/w300/${poster}`}
        alt="poster"
      />
      <p className="title">{title}</p>
      <p>{date}</p>
    </TransitionsModal>
  );
};

export default SingleContent;
