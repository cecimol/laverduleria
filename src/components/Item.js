import { Button, Card, ListGroup } from "react-bootstrap";
import { Link } from "react-router-dom";

const Item = ({
  id,
  pictureURL,
  title,
  category,
  stock,
  price,
  description,
}) => {
  /*return (
    <tr>
      <td>
        <img src={pictureURL} alt={title} style={{ width: "40px" }} />
      </td>
      <td>
        <Link to={`/item/${id}`}>{title}</Link>
      </td>
      <td>{category}</td>
      <td>{stock}</td>
      <td>{price}</td>
      <td>{description}</td>
    </tr>
  );*/

  /*return (
    <div>
      <h1>{title}</h1>
      <img
        style={{ maxHeight: "100px" }}
        src={pictureURL}
        alt="imagen producto"
      />

      <h2>{category}</h2>
      <h2>{stock}</h2>
      <h2>${price}</h2>
      <h2>{description}</h2>
    </div>*/

  return (
    <Card style={{ width: "18rem" }}>
      <Card.Img
        variant="top"
        src={pictureURL}
        alt={title}
        style={{ width: "100px", height: "100px" }}
      />
      <Card.Body>
        <Link to={`/item/${id}`}>{<Card.Title>{title}</Card.Title>}</Link>

        <Card.Text>{description}</Card.Text>
      </Card.Body>
      <ListGroup className="list-group-flush">
        <ListGroup.Item>{category}</ListGroup.Item>
        <ListGroup.Item>{stock} kg. en stock</ListGroup.Item>
        <ListGroup.Item>${price}</ListGroup.Item>
      </ListGroup>
      <Card.Body>
        <Button variant="primary">Ver</Button>
      </Card.Body>
    </Card>
  );
};

export default Item;
