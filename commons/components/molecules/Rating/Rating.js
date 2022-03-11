import React from 'react';

import Rating from '@material-ui/lab/Rating';
import StarBorderIcon from '@material-ui/icons/StarBorder';
import { withStyles } from '@material-ui/core';
const StyledRating = withStyles({
  iconFilled: {
    color: '#fb6467',
  },
  iconHover: {
    color: '#ff3d47',
  },
})(Rating);
export default function HalfRating({rate}) {
  return (
    <StyledRating
      style={{
        float : 'right'
      }}
      name="customized-empty"
      value={rate ?? 1}
      disabled={true}
      precision={0.1}
      emptyIcon={<StarBorderIcon fontSize="inherit"/>}
    />
  );
}