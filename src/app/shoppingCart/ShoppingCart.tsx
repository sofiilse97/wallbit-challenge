import "./shoppingCart.css";
import { CartType } from "../types/cart";

const ShoppingCart = ({
  cart,
  setCart,
}: {
  cart: CartType;
  setCart: (value: CartType) => void;
}) => {
  const parseDate = (date: Date | string) => {
    if (typeof date === "string") {
      date = new Date(date);
    }
    const day = date.getDate();
    const month = date.getMonth() + 1;
    const fullYear = date.getFullYear();

    return `${day}/${month}/${fullYear}`;
  };

  const parseTime = (date: Date | string) => {
    if (typeof date === "string") {
      date = new Date(date);
    }
    const hours = date.getHours();
    const minutes = date.getMinutes() + 1;

    return `${hours}:${minutes}`;
  };

  if (!cart)
    return (
      <div
        style={{ maxWidth: "600px", border: "1px solid", padding: "8px 16px" }}
      >
        <h2 style={{ margin: 0 }}>Carrito de la compra - Vacío</h2>
        Todavía no has añadido nada al carrito de la compra. Prueba a buscar
        algún producto y añadirlo al carrito de la compra!!!
      </div>
    );

  return (
    <>
      <div
        style={{ maxWidth: "600px", border: "1px solid", padding: "8px 16px" }}
      >
        <h2 style={{ margin: 0 }}>
          Carrito de la compra - Iniciado {parseDate(cart.createdAt)} -{" "}
          {parseTime(cart.createdAt)}
        </h2>

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
                  <img src={product.image} height={100} width={100} />
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
