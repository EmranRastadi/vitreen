import Head from "next/head";
import {Navbar} from "@organisms/index";
import Products from "./products";

export default function Home() {
    return (
        <div>
            <Head>
                <title>Products</title>
            </Head>

            <Products/>

        </div>
    )
}
