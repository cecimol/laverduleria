import { Card } from "react-bootstrap";
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
  return (
    <Card style={{ width: "18rem" }}>
      <Link to={`/item/${id}`}>
        <Card.Img
          variant="top"
          src={pictureURL}
          alt={title}
          style={{ width: "100px", height: "100px" }}
        />
        <Card.Body>
          {<Card.Title>{title}</Card.Title>}
          <Card.Text>Precio: ${price}</Card.Text>
        </Card.Body>
      </Link>
    </Card>
  );
};

export default Item;
