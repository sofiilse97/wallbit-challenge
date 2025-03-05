import { useEffect, useState } from "react";
import { CartContext } from "./CartContext";
import {
  getCartFromLocalStorage,
  saveCartOnLocalStorage,
} from "../utils/localStorage/cart";

const CartProvider = ({ children }: { children: any }) => {
  const [cart, setCart] = useState(null);

  useEffect(() => {
    const savedCart = getCartFromLocalStorage();

    if (savedCart) setCart(JSON.parse(savedCart));
  }, []);

  useEffect(() => {
    if (cart) saveCartOnLocalStorage(cart);
  }, [cart]);

  return (
    <CartContext.Provider value={{ cart, setCart }}>
      {children}
    </CartContext.Provider>
  );
};

export default CartProvider;
