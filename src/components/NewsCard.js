import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import { Link, Router } from 'react-router-dom';
import './css/home.css';

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
  },
  media: {
    height: 180,
  },
});

export default function NewsCard(props) {
  const classes = useStyles();

  return (
    <>
      <Link to={props.url}>
        <Card className={classes.root} className="cardDeco">
          <CardActionArea>
            <CardMedia
              className={classes.media}
              image={props.urlImage}
              title="Visit Website"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="h2">
                {props.title}
              </Typography>
            </CardContent>
          </CardActionArea>
        </Card>
      </Link>
      </>
  );
}
