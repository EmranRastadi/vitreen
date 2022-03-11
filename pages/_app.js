import '../styles/globals.css'
import React , {useEffect} from "react";
import {Hydrate, QueryClient, QueryClientProvider} from 'react-query'
import {Navbar} from "@organisms/index";

function MyApp({Component, pageProps}) {
    const [queryClient] = React.useState(() => new QueryClient())

    useEffect(() => {
        const jssStyle = document.querySelector('#jss-server-side');
        if (jssStyle) {
            jssStyle.parentElement.removeChild(jssStyle)
        }
    }, [])
    return (
        <QueryClientProvider client={queryClient}>
            <Hydrate state={pageProps.dehydratedState}>
                <Navbar/>
                <Component {...pageProps} />
            </Hydrate>
        </QueryClientProvider>
    )
}

export default MyApp
