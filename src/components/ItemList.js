import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { products } from "../data/products";
import Item from "./Item";

const ItemList = () => {
  const [productos, setProductos] = useState([]);
  const { id } = useParams();
  useEffect(() => {
    const getProducts = new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(products);
      }, 2000);
    });

    getProducts.then((response) => {
      setProductos(response);
    });
  }, []);
  return (
    <div style={{ display: "flex" }}>
      {productos
        .filter((producto) => !id || producto.category === id)
        .map((producto) => (
          <Item key={producto.title} {...producto} />
        ))}
    </div>
  );
};

export default ItemList;
