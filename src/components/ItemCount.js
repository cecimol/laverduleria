import { useState } from "react";
import { Button, Form, InputGroup } from "react-bootstrap";

const ItemCount = () => {
  const [cantidad, setCantidad] = useState(0);
  const [stock, setStock] = useState(10);
  const handleMinusClick = () => {
    if (cantidad > 0) {
      setCantidad(cantidad - 1);
    }
  };
  const handlePlusClick = () => {
    if (cantidad < stock) {
      setCantidad(cantidad + 1);
    }
  };
  const handleAddClick = () => {
    setStock(stock - cantidad);
    setCantidad(0);
  };
  return (
    <>
      <div>Stock {stock}</div>
      <InputGroup className="mb-3 lg-3">
        <Button variant="outline-secondary" onClick={handleMinusClick}>
          -
        </Button>
        <Form.Control as="input" disabled value={cantidad} />
        <Button variant="outline-secondary" onClick={handlePlusClick}>
          +
        </Button>
        <Button variant="outline-secondary" onClick={handleAddClick}>
          Agregar
        </Button>
      </InputGroup>
    </>
  );
};

export default ItemCount;
