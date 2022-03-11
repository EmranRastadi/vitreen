import {createContext, useReducer} from "react";
const Store = createContext(null);
export const PRODUCT_COLOR = "PRODUCT_COLOR"
export const CART = "CART"

const initialState = {
    color : 1,
    cart : {
        qty : 1,
        size : 'xl'
    }
}
const StoreProvider = (props) => {

    const reducer = (state = initialState, action) => {
        switch (action.type) {
            case PRODUCT_COLOR :
                return {...state , color : action.payload}
            case CART :
                return {...state , cart : action.payload}
            default :
                return state;
        }
    }

    const [state, dispatch] = useReducer(reducer, initialState);

    return (
        <Store.Provider value={{state, dispatch}}>
            {props.children}
        </Store.Provider>
    )
}

export {
    Store,
    StoreProvider
}