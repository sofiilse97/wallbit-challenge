import "./shoppingCart.css";
import { CartType, ProductType } from "../types/cart";
import { MdDelete } from "react-icons/md";
import { parseDate, parseTime } from "../utils/dates/date";

const ShoppingCart = ({
  cart,
  setCart,
}: {
  cart: CartType;
  setCart: (value: CartType) => void;
}) => {
  const handleCleanCart = () => {
    setCart(null);
  };

  const handleRemoveFromCart = (product: ProductType) => {
    setCart({
      ...cart,
      products: [
        ...cart.products.filter((productFind) => productFind.id !== product.id),
      ],
      cartTotal: cart.cartTotal - product.amount,
    });
  };

  if (!cart)
    return (
      <div
        style={{ maxWidth: "600px", border: "1px solid", padding: "8px 16px" }}
      >
        <h2 style={{ margin: 0 }}>Carrito de la compra - Vacío</h2>
        <p>
          Todavía no has añadido nada al carrito de la compra. Prueba a buscar
          algún producto y añadirlo al carrito de la compra!!!
        </p>
      </div>
    );

  return (
    <>
      <div
        style={{ maxWidth: "600px", border: "1px solid", padding: "8px 16px" }}
      >
        <div className="cart-header">
          <h2 style={{ margin: 0 }}>
            Carrito de la compra - Iniciado {parseDate(cart.createdAt)} -{" "}
            {parseTime(cart.createdAt)}
          </h2>
          <button onClick={() => handleCleanCart()}>
            <MdDelete />
          </button>
        </div>

        <table>
          <thead>
            <tr>
              <th>Cant</th>
              <th>Nombre</th>
              <th>Precio U</th>
              <th>Precio T</th>
              <th>Foto</th>
            </tr>
          </thead>
          <tbody>
            {cart.products.map((product) => (
              <tr key={product.id}>
                <td>{product.quantity}</td>
                <td title={product.title} className="product-title">
                  {product.title}
                </td>
                <td>{product.price.toFixed(2)}€</td>
                <td>{product.amount.toFixed(2)}€</td>
                <td>
                  <div className="product-image-container">
                    <img src={product.image} height={100} width={100} />
                    <button
                      className="product-button"
                      onClick={() => handleRemoveFromCart(product)}
                    >
                      Eliminar
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
          <tfoot>
            <tr>
              <th className="cart-total" colSpan={4}>
                Total
              </th>
              <td>{cart.cartTotal.toFixed(2)}€</td>
            </tr>
          </tfoot>
        </table>
      </div>
    </>
  );
};

export default ShoppingCart;
