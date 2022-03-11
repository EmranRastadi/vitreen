import { Grid } from '@material-ui/core';
import { ProductDetailCardRightSide } from '@organisms/index';
import ProductDetailSlider from '@organisms/ProductDetailSlider/ProductDetailSlider';

export default function ProductDetailCard(props) {
  return (
    <Grid container  style={{
      borderRadius: '10px',
      background: '#ffffff',
      boxShadow: '0 0 30px 15px rgba(0 0 0 / 20%)',
    }}>
      <Grid item md={4} xs={12} style={{minHeight : '400px'}}>
        <ProductDetailSlider {...props}/>
      </Grid>
      <Grid item md={8} xs={12}>
        <ProductDetailCardRightSide {...props} />
      </Grid>
    </Grid>
  );
}