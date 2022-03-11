import {createContext, useReducer} from "react";

const Store = createContext(null);

const initialState = {}
const StoreProvider = (props) => {

    const reducer = (state = initialState, action) => {
        switch (action) {
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