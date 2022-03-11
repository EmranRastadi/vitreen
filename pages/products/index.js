import {useGetProduct, useGetProducts} from "../../commons/hooks/useProducts/useProducts.hook";
import {dehydrate, QueryClient, useQuery} from "react-query";
import axios from "axios";
import {Container, Grid} from "@material-ui/core";
import {useStyles} from "./style";
import {ProductCard} from "@organisms/index";

export default function Products() {
    const classes = useStyles()
    const {data , isLoading} = useGetProducts();
    // if (isLoading) return <p>please loading ...</p>

    console.log(222222222 , data)



    return (
        <Container className={classes.container}>
            <Grid container spacing={3}>
                {data.length ? data.map((item , index) => (
                    <Grid item md={3} xs={6}>
                        <ProductCard/>
                    </Grid>
                )) : null}


            </Grid>
        </Container>
    )
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