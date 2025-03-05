import "./App.css";
import CartProvider from "./app/context/CartProvider";
import Store from "./app/store/Store";

function App() {
  return (
    <CartProvider>
      <Store /> {/* Este componente podrá usar CartContext */}
    </CartProvider>
  );
}

export default App;
