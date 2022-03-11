import { useRouter } from 'next/router';
import { useGetProduct } from '../../commons/hooks/useProducts/useProducts.hook';
import Head from 'next/head';
import { Loading } from '@molecules/index';
import { Container, Grid } from '@material-ui/core';
import { ProductDetailCard } from '@templates/index';
import { StoreProvider } from '@utils/Store';

export default function Product() {
  const router = useRouter();
  const { id } = router.query;
  const { data, isLoading } = useGetProduct( id );
  return (
      <Container style={{
        marginTop: '30px',
      }}>
        <Head>
          <title>{data?.data?.title ?? 'detail'}</title>
          <meta property="og:title" content={data?.data?.description ?? "vitreen"} key="title" />

        </Head>

        {isLoading ? <Loading/> : null}
        <ProductDetailCard {...data?.data} />
      </Container>
  );
}