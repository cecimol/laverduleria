import Item from "./Item";

const ItemList = ({ productos }) => {
  return (
    <div style={{ display: "flex", width: "100%" }}>
      {productos.map((producto) => (
        <Item key={producto.title} {...producto} />
      ))}
    </div>
  );
};

export default ItemList;
