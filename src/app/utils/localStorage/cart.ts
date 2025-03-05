import { CartType } from "../../types/cart";

export const saveCartOnLocalStorage = (cart: CartType) => {
  localStorage.setItem("cart", JSON.stringify(cart));
};

export const removeCartFromLocalStorage = () => {
  localStorage.removeItem("cart");
};

export const getCartFromLocalStorage = () => {
  return localStorage.getItem("cart");
};
