import ItemCount from "./ItemCount";
import { useState, useContext } from "react";
import { CartContext } from "../context/cartContext";
import { Link } from "react-router-dom";

const ItemDetail = ({ id, title, pictureURL, description, price }) => {
  const [stock, setStock] = useState(5);
  const [cantidadComprados, setCantidadComprados] = useState(0);
  const { addItem, isInCart } = useContext(CartContext);

  const handleAgregar = (number, setNumber) => {
    if (stock > number) {
      setNumber(number + 1);
    }
  };

  const handleResta = (number, setNumber) => {
    if (number > 1) {
      setNumber(number - 1);
    }
  };

  const onAdd = (number) => {
    if (!isInCart(id)) {
      setStock(stock - number);
      setCantidadComprados(number);
      addItem(
        {
          id: id,
          title: title,
          pictureURL: pictureURL,
          description: description,
          price: price,
        },
        number
      );
    }
  };
  const mostrarItemCountOBoton = () => {
    if (cantidadComprados > 0) {
      return (
        <Link to="/cart">
          <button>Terminar mi compra</button>
        </Link>
      );
    } else {
      return (
        <ItemCount
          stock={stock}
          initial={1}
          onIncrement={handleAgregar}
          onSubstract={handleResta}
          onAdd={onAdd}
        />
      );
    }
  };

  return (
    <div className="detail">
      <h1>{title}</h1>
      <img
        style={{ maxHeight: "300px" }}
        src={pictureURL}
        alt="imagen producto"
      />
      <p>{description}</p>
      <h2>${price}</h2>
      {mostrarItemCountOBoton()}
    </div>
  );
};

export default ItemDetail;
