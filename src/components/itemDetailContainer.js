import { useEffect, useState } from "react";
import { Spinner } from "react-bootstrap";
import { useParams } from "react-router-dom";
import { products } from "../data/products";

const ItemDetailContainer = () => {
  const [producto, setProducto] = useState(null);
  const { id } = useParams();
  useEffect(() => {
    const getProductById = new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(products.find((product) => product.id.toString() === id));
      }, 2000);
    });
    getProductById.then((response) => {
      setProducto(response);
    });
  }, [id]);
  return (
    <>
      {producto ? (
        <div>
          <h1>{producto.title}</h1>
          <img src={producto.pictureURL} alt={producto.title} />
          <p>
            <b>Categoria:</b> {producto.category}
          </p>
          <p>
            <b>Precio:</b> {producto.price}
          </p>
          <p>
            <b>Stock:</b> {producto.stock}
          </p>
          <p>{producto.description}</p>
        </div>
      ) : (
        <Spinner animation="border" role="status">
          <span className="visually-hidden">Loading...</span>
        </Spinner>
      )}
    </>
  );
};

export default ItemDetailContainer;
