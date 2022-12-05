import { useState } from "react";
import { Button, Form, InputGroup } from "react-bootstrap";

const ItemCount = ({ stock, initial, onIncrement, onSubstract, onAdd }) => {
  const [number, setNumber] = useState(initial);

  return (
    <>
      <div>Stock: {stock}</div>
      <InputGroup className="mb-3 lg-3">
        <Button
          variant="outline-secondary"
          onClick={() => onSubstract(number, setNumber)}
        >
          -
        </Button>
        <Form.Control as="input" disabled value={number} />
        <Button
          variant="outline-secondary"
          onClick={() => onIncrement(number, setNumber)}
        >
          +
        </Button>
        <Button variant="outline-secondary" onClick={() => onAdd(number)}>
          Agregar all carrito
        </Button>
      </InputGroup>
    </>
  );
};

export default ItemCount;
