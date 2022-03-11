import React from 'react';
import { CardMedia } from '@material-ui/core';

export default function CardMediaER(props){
  return (
    <CardMedia
      component="img"
      alt="Contemplative Reptile"
      height="140"
      image={props.image}
      title="Contemplative Reptile"
    />
  )
}