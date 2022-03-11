import {useRouter} from "next/router";
import {useGetProduct} from "../../commons/hooks/useProducts/useProducts.hook";

export default function Product(){
    const router = useRouter();
    const {id} = router.query;
    const {data , isLoading} = useGetProduct(id);

    return (
        <>hi product</>
    )
}