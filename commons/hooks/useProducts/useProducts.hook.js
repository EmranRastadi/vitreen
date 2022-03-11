import { useEffect, useState } from 'react';
import { useQuery } from 'react-query';
import axios from 'axios';
import { BASE_URL } from '@utils/Types';

const useGetProduct = (id) => {
  const { ...qryParams } = useQuery( [ 'product', id ], () => axios( {
      method: 'GET',
      url: BASE_URL + `/products/${id}/`,
    } ), {
      refetchOnWindowFocus: false,
      retry: false,
    enabled : id ? true : false
    },
  );
  return { ...qryParams };
};
const useGetProducts = () => {
  const [ products, setProducts ] = useState( [] );
  const { ...qryParams } = useQuery( 'products', () => axios( {
      method: 'GET',
      url: BASE_URL + `/products/`,
    } ), {
      onSuccess: data => {
        setProducts( data?.data );
      },
      refetchOnWindowFocus: false,
      retry: false,
    },
  );
  return { ...qryParams, products };
};

export {
  useGetProduct,
  useGetProducts,
};