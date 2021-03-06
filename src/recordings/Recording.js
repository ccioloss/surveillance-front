import React from "react";
import {
  Card,
  CardMedia,
  CardContent,
  CardActions,
  Typography,
  Button,
  Grid,
} from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import moment from "moment";

const Recording = ({ url, name, timestamp, handleDelete, id }) => {
  const deleteRecording = () => {
    handleDelete(id);
  };

  return (
    <Grid item xs={12} sm={6} md={4} padding={2}>
      <Card sx={{ maxWidth: 345 }} variant="outlined">
        <CardMedia component="video" src={url} controls />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {name}
          </Typography>
          <Typography variant="h6" color="text.secondary">
            {moment.utc(timestamp).local().format("DD.MM.YYYY HH:mm")}
          </Typography>
        </CardContent>
        <CardActions style={{ width: "100%", justifyContent: "flex-end" }}>
          <Button
            size="small"
            variant="outlined"
            color="error"
            startIcon={<DeleteIcon />}
            onClick={deleteRecording}
          >
            Delete
          </Button>
        </CardActions>
      </Card>
    </Grid>
  );
};

export default Recording;
