import { createContext } from "react";
import { CartContextType } from "../types/cart";

export const CartContext = createContext<CartContextType | null>({
  cart: null,
  setCart: () => {}, // Función vacía para evitar errores
});
