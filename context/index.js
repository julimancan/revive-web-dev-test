import { createContext, useContext, useState } from "react";

// creates the context for the cart
export const CartContext  = createContext();
export const useCartContext = () => useContext(CartContext);

// provider component for the global state
export const CartProvider = ({ children }) => {
  // sets the cup quantities 48 by default
  const [cupQty, setCupQty] = useState(48);

  // sets the state for the type of box selected
  const [boxInCart, setBoxInCart] = useState();

  // sets the price per cup
  const pricePerCup = 5.49;

  // sets the state of what was link clicked on the checkout page
  const [linkClicked, setLinkClicked] = useState();

  // constant to prepare all the global state and send it in the component
  const value = {
    cupQty,
    setCupQty,
    boxInCart,
    setBoxInCart,
    pricePerCup,
    linkClicked,
    setLinkClicked
  };

  return (
    <CartContext.Provider value={value}>
      {children}
    </CartContext.Provider>
  )
}