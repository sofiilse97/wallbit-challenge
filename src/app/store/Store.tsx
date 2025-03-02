import Search from "../search/Search";
import ShoppingCart from "../shoppingCart/ShoppingCart";
import "./store.css";

const Store = () => {
  return (
    <div className="store-container">
      <h1>Tienda - El topo</h1>
      <Search />
      <ShoppingCart />
    </div>
  );
};

export default Store;
