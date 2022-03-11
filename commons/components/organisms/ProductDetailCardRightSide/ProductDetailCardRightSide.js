import { Grid, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { AddToCart, HalfRating, PriceShow } from '@molecules/index';
import { ProductDetailAttr } from '@organisms/index';
import { useNotifyManager } from '../../../hooks/useNotifyManager/useNotifyManager';
import { useContext } from 'react';
import { Store } from '@utils/Store';

const useStyle = makeStyles( {
  title: {
    fontSize: 30,
    color: '#565656',
    fontWeight: 700,
  },
  subtit: {
    fontSize: 16,
    color: '#adadad',
    fontWeight: 300,
  },
  desc: {
    color: '#ababab',
  },
  descTitle: {
    fontWeight: 'bolder',
    color: '#565656',
  },
} );
export default function ProductDetailCardRightSide(props) {
  const classes = useStyle();
  const {notifySuccess} = useNotifyManager()
  const {state} = useContext(Store)
  function handleAddToCart(){
    notifySuccess('please check your console ...')
    console.clear();
    console.info("name : " , props.title);
    console.info("price : " , (props.price * 0.9).toFixed(2));
    console.info("qty : " , state.cart.qty);
    console.info("size : " , state.cart.size);
    console.info("totalPrice : " , ((props.price * 0.9) *  state.cart.qty).toFixed(2));
  }
  return (
    <Grid container style={{
      padding: 25,
    }}>
      <Grid item md={8} xs={12}>
        <Typography variant={'h1'} className={classes.title}>
          {props.title ?? '---'}
        </Typography>
        <Typography className={classes.subtit}>
          <i>
            {props.category ?? '---'}
          </i>
        </Typography>
        <PriceShow {...props}/>
      </Grid>
      <Grid item md={4} xs={12}
            style={{
              height: 40,
            }}
      >
        <HalfRating rate={props?.rating?.rate}/>
      </Grid>

      <ProductDetailAttr {...props} />

      <Grid item xs={12} style={{
        marginTop: 30,
      }}>
        <Typography variant={'h6'} className={classes.descTitle}>DESCRIPTION</Typography>
        <Typography className={classes.desc}>
          {props.description}
        </Typography>
      </Grid>
      <Grid item xs={12}>
        <AddToCart onClick={handleAddToCart}/>
      </Grid>
    </Grid>
  );
}