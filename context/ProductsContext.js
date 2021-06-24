import React, { createContext, useContext, useReducer, useMemo } from "react"
import { productsReducer } from "../context/reducers/productsReducer";
export const ProductsContext = createContext()

export const AppContextProvider = ({ children }) => {
    const [store, dispatch] = useReducer(productsReducer, {});

    //ComponentDidMouunt
    React.useEffect(() => {

    }, []);

    //
    const values = useMemo(() => (
        {
            store, dispatch,   // Funciones que son exportadas para manejo externo.
        }),
        [
            store]);   // States que serán visibles en el contexto.

    // Interface donde será expuesto como proveedor y envolverá la App.
    return <ProductsContext.Provider value={values}>{children}</ProductsContext.Provider>;
}

//
export function useAppContext() {
    const context = useContext(ProductsContext);

    if (!context) {
        console.error('Error deploying App Context!!!');
    }

    return context;
}

export default useAppContext;