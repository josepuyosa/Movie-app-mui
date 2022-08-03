import React, { useEffect, useState } from "react";
import Backdrop from "@mui/material/Backdrop";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import Fade from "@mui/material/Fade";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import "../../Pages/Trending/trending.css";
import axios from "axios";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  width: "80%",
  height: "80%",
  transform: "translate(-50%, -50%)",
  bgcolor: "background.paper",
  border: "1px solid #282c34",
  borderRadius: 10,
  boxShadow: 24,
  p: 4,
  backgroundColor: "#39445a",
  color: "white",
};

export default function TransitionsModal({ children, id }) {
  const [open, setOpen] = useState(false);
  const [content, setContent] = useState();
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const fetchData = async () => {
    const { data } = await axios.get(
      `https://api.themoviedb.org/3/movie/${id}?api_key=ec470816e16822f85cfa90a282c2fc75&language=en-US`
    );
    setContent(data);
  };
  useEffect(() => {
    fetchData();
  }, []);
  return (
    <div>
      <div className="container" onClick={handleOpen}>
        {children}
      </div>
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        open={open}
        onClose={handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={open}>
          <Box sx={style}>
            {content && (
              <div>
                <img
                  src={`https://image.tmdb.org/t/p/w500/${content.backdrop_path}`}
                  alt="poster"
                />
                <div>
                  <p>Title: {content.title}</p>
                  <p>Release date: {content.release_date}</p>
                  <p>Description: {content.overview}</p>
                </div>
              </div>
            )}
          </Box>
        </Fade>
      </Modal>
    </div>
  );
}
