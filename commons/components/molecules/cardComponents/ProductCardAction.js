import Button from '@material-ui/core/Button';
import CardActions from '@material-ui/core/CardActions';
import React from 'react';
import NextLink from 'next/link'
import { Typography } from '@material-ui/core';
export default function ProductCardAction(props){
  return (
    <CardActions style={{
    display : 'flex',
      alignItems : 'center',
      justifyContent : 'space-between'
    }}>
      <NextLink href={`/products/${props.id}/`} passHref>
        <Button style={{
          textTransform : 'capitalize'
        }} size="small" color="primary">
          detail
        </Button>
      </NextLink>

      <Typography >${props.price}</Typography>
    </CardActions>
  )
}