import { doc, getFirestore, getDoc } from "firebase/firestore";
import { useEffect, useState } from "react";
import { Spinner } from "react-bootstrap";
import { useParams } from "react-router-dom";
import ItemDetail from "./ItemDetail";

const ItemDetailContainer = () => {
  const [producto, setProducto] = useState(null);
  const { id } = useParams();
  const dataBase = getFirestore();
  useEffect(() => {
    const prodRef = doc(dataBase, "Productos", id);
    getDoc(prodRef).then((item) => {
      if (item.exists()) {
        setProducto({ id: item.id, ...item.data() });
      }
    });
  }, [id, dataBase]);
  return (
    <>
      {producto ? (
        <ItemDetail
          id={producto.id}
          title={producto.title}
          pictureURL={producto.pictureURL}
          description={producto.description}
          price={producto.price}
        />
      ) : (
        <Spinner animation="border" role="status">
          <span className="visually-hidden">Loading...</span>
        </Spinner>
      )}
    </>
  );
};

export default ItemDetailContainer;
