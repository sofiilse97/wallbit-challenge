import { useState } from "react";
import { CartContext } from "./CartContext";

const CartProvider = ({ children }: { children: any }) => {
  const [cart, setCart] = useState(null);

  return (
    <CartContext.Provider value={{ cart, setCart }}>
      {children}
    </CartContext.Provider>
  );
};

export default CartProvider;
