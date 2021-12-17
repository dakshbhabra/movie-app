import react, { useState } from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
// import Typography from '@mui/material/Typography';
import { CardActionArea } from "@mui/material";

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

  function truncate(str, n) {
    return str?.length > n ? str.substr(0, n - 1) + "..." : str;
  }
  return (
    <div>
      <Card
        onClick={handleOpen}
        sx={{ minWidth: 250, maxHeight: 350, minHeight: 350 }}
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
                image={`https://image.tmdb.org/t/p/w400/${movieItem.poster_path}`}
                alt="https://www.electiondataservices.com/wp-content/uploads/2014/10/sorry-image-not-available.jpg"
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
              </CardContent>
            </CardActionArea>
          </Card>
        </Box>
      </Modal>
    </div>
  );
}
