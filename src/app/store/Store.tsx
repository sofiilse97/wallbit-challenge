import { useContext } from "react";
import Search from "../search/Search";
import ShoppingCart from "../shoppingCart/ShoppingCart";
import "./store.css";
import { CartContext } from "../context/CartContext";

const Store = () => {
  const cartContext = useContext(CartContext);

  if (!cartContext) {
    throw new Error("MyComponent must be used within a CartProvider");
  }

  const { cart, setCart } = cartContext;

  return (
    <div className="store-container">
      <h1>Tienda - El topo</h1>
      <Search />
      <ShoppingCart cart={cart} setCart={setCart} />
    </div>
  );
};

export default Store;
