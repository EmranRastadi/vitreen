import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import { CardMedia, ProductCardAction } from '@molecules/index';

const useStyles = makeStyles( {
  root: {
    maxWidth: 345,
  },
  title: {
    overflow: 'hidden',
    textOverflow: 'ellipsis',
    whiteSpace: 'nowrap',
    width: '100%',
  },
  description: {
    display: '-webkit-box',
    lineClamp: 4,
    boxOrient: 'vertical',
    overflow: 'hidden',
    textOverflow: 'ellipsis',
  },
} );

export default function ProductCard(props) {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardActionArea>
        <CardMedia {...props} />
        <CardContent>
          <Typography className={classes.title} gutterBottom variant="h5" component="h2">
            {props.title}
          </Typography>
          <Typography className={classes.description} variant="body2" color="textSecondary" component="p">
            {props.description}
          </Typography>
        </CardContent>
      </CardActionArea>
      <ProductCardAction {...props} />
    </Card>
  );
}
