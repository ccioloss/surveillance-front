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

const Recording = ({ url, name, timestamp }) => {
  return (
    <Grid item xs={12} sm={6} md={4} padding={2}>
      <Card sx={{ maxWidth: 345 }} variant="outlined">
        <CardMedia component="video" src={url} controls />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {name}
          </Typography>
          <Typography variant="h6" color="text.secondary">
            {timestamp}
          </Typography>
        </CardContent>
        <CardActions style={{ width: "100%", justifyContent: "flex-end" }}>
          <Button size="small">Share</Button>
          <Button
            size="small"
            variant="outlined"
            color="error"
            startIcon={<DeleteIcon />}
          >
            Delete
          </Button>
        </CardActions>
      </Card>
    </Grid>
  );
};

export default Recording;
