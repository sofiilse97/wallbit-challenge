import { useEffect, useRef, useState } from "react";
import { getProduct } from "../api/searchProduct";

const Search = () => {
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
