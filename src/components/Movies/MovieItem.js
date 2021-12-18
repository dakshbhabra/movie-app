import { useState } from "react";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import { CardActionArea, Rating } from "@mui/material";
import Box from "@mui/material/Box";
import StarIcon from "@mui/icons-material/Star";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

export default function MovieItem({ movieItem }) {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const value = movieItem.vote_average / 2;
  const labels = [
    {5: "Excellent+"},
    {4.5: "Excellent"},
    {4: "Good+"},
    {3.5: "Good"},
    {3: "Ok+"},
    {2.5: "Ok"},
    {2: "Poor+"},
    {1.5: "Poor"},
    {1: "Useless+"},
    {0.5: "Useless"},
];
  function getRating(val) {
    if(val === 0) return "No rating";
    for (let x in labels) {
      if (Object.keys(labels[x])[0] <= val)  return Object.values(labels[x])[0];
    }
    return "No rating";
  }
  function truncate(str, n) {
    return str?.length > n ? str.substr(0, n - 1) + "..." : str;
  }
  // const getInfo = () => {
  //   console.log(movieItem);
  // };
  return (
    <div>
      <Card
        onClick={handleOpen}
        sx={{
          minWidth: 250,
          maxHeight: 350,
          minHeight: 350,
        }}
      >
        <CardActionArea>
          <CardMedia
            component="img"
            height="150"
            image={
              movieItem?.poster_path
                ? `https://image.tmdb.org/t/p/w400/${movieItem.poster_path}`
                : "https://www.electiondataservices.com/wp-content/uploads/2014/10/sorry-image-not-available.jpg"
            }
            alt={movieItem.original_title}
          />
          <CardContent>
            <Typography gutterBottom variant="h6" component="div">
              {movieItem.original_title}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              {truncate(movieItem?.overview, 50).length === 0
                ? "No Description Available"
                : truncate(movieItem?.overview, 50)}
            </Typography>
            <Box
              sx={{
                display: "flex",
              }}
            >
              <Rating
                name="text-feedback"
                value={value}
                readOnly
                precision={0.5}
                emptyIcon={
                  <StarIcon style={{ opacity: 0.55 }} fontSize="inherit" />
                }
              />
              <Box sx={{ ml: 2 }}>{getRating(value)}</Box>
            </Box>
            {/* <button onClick={getInfo}>click</button> */}
          </CardContent>
        </CardActionArea>
      </Card>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Card sx={{ maxWidth: 345 }}>
            <CardActionArea>
              <CardMedia
                component="img"
                height="200"
                image={
                  movieItem?.poster_path
                    ? `https://image.tmdb.org/t/p/w400/${movieItem.poster_path}`
                    : "https://www.electiondataservices.com/wp-content/uploads/2014/10/sorry-image-not-available.jpg"
                }
                alt={movieItem.original_title}
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  {movieItem.original_title}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {movieItem?.overview.length === 0
                    ? "No Description Available"
                    : movieItem.overview}
                </Typography>
                <Box
                  sx={{
                    width: 200,
                    display: "flex",
                    alignItems: "center",
                  }}
                >
                  <Rating
                    name="text-feedback"
                    value={value}
                    readOnly
                    precision={0.5}
                    emptyIcon={
                      <StarIcon style={{ opacity: 0.55 }} fontSize="inherit" />
                    }
                  />
                  <Box sx={{ ml: 2 }}>{getRating(value)}</Box>
                </Box>
              </CardContent>
            </CardActionArea>
          </Card>
        </Box>
      </Modal>
    </div>
  );
}
