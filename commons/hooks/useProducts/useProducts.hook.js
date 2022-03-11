import {useEffect} from "react";
import {useQuery} from "react-query";
import axios from "axios";
import {BASE_URL} from "@utils/Types";

const useGetProduct = (id) => {
    const {...qryParams} = useQuery(['product', id], () => axios({
            method: 'GET',
            url: BASE_URL + `/products/${id}/`,
        })
    )
    return {qryParams}
}
const useGetProducts = async () => {
    const {...qryParams} = await useQuery('products', () => {
        return axios({
                method: 'GET',
                url: BASE_URL + `/products/`,
            })
        }
    )
    return {qryParams}
}

export {
    useGetProduct,
    useGetProducts
}