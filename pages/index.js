import Head from "next/head";
import Products from "./products";
import { Container } from '@material-ui/core';

export default function Home() {
    return (
        <Container>
            <Head>
                <title>Products</title>
            </Head>
            <Products/>
        </Container>
    )
}
