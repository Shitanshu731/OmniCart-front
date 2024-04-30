import { createContext, useState } from "react";
const CartContext = createContext({});
export function CartContextProvider({chilren}){
    const [cartProducts,setCartProducts] = useState([]);
    return(
        <CartContext.Provider
        value={{cartProducts}}
        >{chilren}</CartContext.Provider>
    )
}