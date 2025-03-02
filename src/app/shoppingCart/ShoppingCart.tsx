import { useState } from "react";
import "./shoppingCart.css";
const ShoppingCart = () => {
  const [cart, setCart] = useState({
    id: 1,
    createdAt: new Date(),
    products: [
      {
        id: 1,
        title: "Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops",
        price: 109.95,
        description:
          "Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday",
        category: "men's clothing",
        image: "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg",
        rating: {
          rate: 3.9,
          count: 120,
        },
        total: 2,
      },
    ],
    cartTotal: 180,
  });

  const parseDate = (date: Date) => {
    const day = date.getDate();
    const month = date.getMonth() + 1;
    const fullYear = date.getFullYear();

    return `${day}/${month}/${fullYear}`;
  };

  const parseTime = (date: Date) => {
    const hours = date.getHours();
    const minutes = date.getMinutes() + 1;

    return `${hours}:${minutes}`;
  };

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
                <td>{product.total}</td>
                <td title={product.title} className="product-title">
                  {product.title}
                </td>
                <td>{product.price}€</td>
                <td>{product.price * product.total}€</td>
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
              <td>{cart.cartTotal}€</td>
            </tr>
          </tfoot>
        </table>
      </div>
    </>
  );
};

export default ShoppingCart;
