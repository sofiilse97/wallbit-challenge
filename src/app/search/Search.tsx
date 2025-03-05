import { useContext, useEffect, useRef, useState } from "react";
import { getProduct } from "../api/searchProduct";
import { CartContext } from "../context/CartContext";
import { ProductType } from "../types/cart";

const Search = () => {
  const cartContext = useContext(CartContext);

  if (!cartContext) {
    throw new Error("ChildComponent must be used within a CartProvider");
  }

  const { cart, setCart } = cartContext;

  const inputCountRef = useRef(null);
  const inputProductRef = useRef(null);
  const [loading, setLoading] = useState(false);

  const handleAddToCart = async () => {
    if (inputCountRef?.current?.value < 1) {
      return alert("Tienes que especificar una cantidad mayor que 0");
    }

    if (inputProductRef?.current?.value < 1) {
      return alert("Tienes que especificar un ID del producto");
    }

    searchProductAndAddToCart();
  };

  const searchProductAndAddToCart = async () => {
    setLoading(true);

    const response = await getProduct({
      productId: inputProductRef?.current?.value,
    });

    console.log("response", response);
    if (response.ok) {
      try {
        const product = await response.json();
        console.log("??", product);
        addToCartFn({ product, cant: inputCountRef?.current?.value });
        setLoading(false);
      } catch (e) {
        console.error(e);
        alert("Respuesta vacía del servidor");
        setLoading(false);
      }
    } else {
      console.error("Hubo un error al obtener el producto");
      alert(`Error code: ${response.status} `);
      setLoading(false);
    }
  };

  const addToCartFn = ({
    product,
    cant,
  }: {
    product: ProductType;
    cant: number;
  }) => {
    // TODO: improve this
    if (!cart) {
      setCart({
        id: 1,
        createdAt: new Date(),
        products: [
          {
            ...product,
            quantity: Number(cant),
            amount: product.price * Number(cant),
          },
        ],
        cartTotal: product.price * Number(cant),
      });
    } else {
      // TODO: improve this
      const findProduct = cart.products.find(
        (element) => element.id === product.id
      );
      console.log("findProduct", findProduct);
      if (findProduct) {
        setCart({
          ...cart,
          products: [...cart.products].map((productCopy) => {
            return productCopy.id === product.id
              ? {
                  ...productCopy,
                  quantity: productCopy.quantity + Number(cant),
                  amount: productCopy.amount + product.price * Number(cant),
                }
              : productCopy;
          }),
          cartTotal: cart.cartTotal + product.price * Number(cant),
        });
      } else {
        setCart({
          ...cart,
          products: [
            ...cart.products,
            {
              ...product,
              quantity: Number(cant),
              amount: product.price * Number(cant),
            },
          ],
          cartTotal: cart.cartTotal + product.price * Number(cant),
        });
      }
    }
  };

  return (
    <div
      style={{ maxWidth: "600px", border: "1px solid", padding: "8px 16px" }}
    >
      <h2 style={{ margin: 0 }}>Agrega los productos al carro de compra</h2>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          gap: 16,
          padding: 16,
          justifyContent: "space-between",
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            gap: 16,
          }}
        >
          <input
            ref={inputCountRef}
            type="number"
            id="productCount"
            placeholder="Cantidad"
            min={1}
          />
          <input
            ref={inputProductRef}
            type="number"
            id="productId"
            placeholder="ID del Producto"
            min={1}
          />
        </div>
        <button disabled={loading} onClick={() => handleAddToCart()}>
          {loading ? "Cargando..." : "Agregar"}
        </button>
      </div>
    </div>
  );
};

export default Search;
