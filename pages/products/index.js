import { useGetProduct, useGetProducts } from '../../commons/hooks/useProducts/useProducts.hook';
import { dehydrate, QueryClient, useQuery } from 'react-query';
import axios from 'axios';
import { Container, Grid } from '@material-ui/core';
import { useStyles } from './style';
import { ProductCard } from '@organisms/index';
import { Loading } from '@molecules/index';
import { StoreProvider } from '@utils/Store';

export default function Products() {
  const classes = useStyles();
  const { products, isLoading } = useGetProducts();
  return (
    <Container className={classes.container}>
      {isLoading ? <Loading/> : null}
      <Grid container spacing={3}>
        {products?.length ? products.map( (product, index) => (
            <Grid item md={3} xs={6} key={index}>
              <ProductCard {...product} />
            </Grid>
        ) ) : null}
      </Grid>
    </Container>

  );
}

// export async function getStaticProps(){
//     const queryClient = new QueryClient()
//     await queryClient.prefetchQuery('products' , () => axios({
//         method : 'GET',
//         url : 'https://fakestoreapi.com/products',
//     }).json)
//     return {
//         props: {
//             dehydratedState: dehydrate(queryClient),
//         },
//     }
// }