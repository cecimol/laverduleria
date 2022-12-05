import { useEffect, useState } from "react";
import ItemList from "./ItemList";
import { getFirestore, collection, getDocs } from "firebase/firestore";
import { useParams } from "react-router-dom";

const ItemListContainer = () => {
  const [productos, setProductos] = useState([]);

  const { id } = useParams();
  const dataBase = getFirestore();

  useEffect(() => {
    const itemCollection = collection(dataBase, "Productos");
    getDocs(itemCollection).then((productosSnapshot) => {
      const productos = productosSnapshot.docs.map((doc) => {
        return { id: doc.id, ...doc.data() };
      });
      if (id) {
        setProductos(productos.filter((producto) => producto.category === id));
      } else {
        setProductos(productos);
      }
    });
  }, [id, dataBase]);
  return <ItemList productos={productos} />;
};

export default ItemListContainer;
