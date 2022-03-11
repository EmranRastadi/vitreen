import { ColorPicker } from '@molecules/index';
import { Grid } from '@material-ui/core';
import { SelectOption } from '@atoms/index';
import { makeStyles } from '@material-ui/core/styles';
import { useHandleChange } from '@templates/ProductDetailCard/HandleChange.hook';
import { useEffect } from 'react';

const useStyled = makeStyles( {
  hasDivider: {
    borderRight: '1px solid #ccc',
  },
  centerAlign: {
    padding: '0 12px !important',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
} );
export default function ProductDetailAttr(props) {
  const classes = useStyled();
  const {input , handleChange } = useHandleChange();


  let sizes = [
    { value: 'xl', title: 'xl' },
    { value: 'lg', title: 'lg' },
    { value: 'md', title: 'md' },
    { value: 'sm', title: 'sm' },
  ];
  let qty = [
    { value: 1, title: 1 },
    { value: 5, title: 5 },
    { value: 10, title: 10 },
    { value: 15, title: 15 },
  ];

  return (
    <Grid container spacing={3} style={{ marginTop: 30 }}>
      <Grid item md={6} xs={12} style={{ padding: '0 12px' }} className={classes.hasDivider}>
        <ColorPicker />
      </Grid>
      <Grid item md={3} xs={6} className={classes.hasDivider + ' ' + classes.centerAlign}>
        <SelectOption title={'SIZE'} selected={input.cart.size ?? 'xl'} name={'size'} items={sizes} onChange={handleChange}/>
      </Grid>
      <Grid item md={3} className={classes.centerAlign} xs={6}>
        <SelectOption title={'QTY'} name={'qty'} selected={input.cart.qty ?? 1} items={qty} onChange={handleChange}/>
      </Grid>
    </Grid>
  );
}