import { useCallback, useContext, useState } from 'react';
import { CART, Store } from '@utils/Store';

const useHandleChange = (params) => {
  const { state, dispatch } = useContext( Store );
  const handleChange = useCallback( ({ target: { name, value } }) => {
    state.cart[name] = value
    dispatch( {
      type: CART,
      payload: state.cart,
    } );
  }, [] );

  return { input : state, handleChange };
};

export {
  useHandleChange,
};