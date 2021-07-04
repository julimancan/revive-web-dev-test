import { createContext, useContext, useState } from "react";


export const CartContext  = createContext();

export const useCartContext = () => useContext(CartContext);

export const CartProvider = ({ children }) => {
  const [cupQty, setCupQty] = useState(48);
  const [boxInCart, setBoxInCart] = useState();

  const pricePerCup = 5.49;

  const value = {
    cupQty,
    setCupQty,
    boxInCart,
    setBoxInCart,
    pricePerCup
  };

  return (
    <CartContext.Provider value={value}>
      {children}
    </CartContext.Provider>
  )
}