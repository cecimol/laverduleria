import { createContext, useState } from "react";
import { Timestamp } from "firebase/firestore";

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [products, setProducts] = useState([]);

  const addItem = (item, quantity) => {
    setProducts((prevState) => [
      ...prevState,
      { item: item, quantity: quantity },
    ]);
  };

  const removeItem = (itemId) => {
    setProducts((prevState) =>
      prevState.filter((producto) => producto.item.id !== itemId)
    );
  };

  const clear = () => {
    setProducts([]);
  };

  const isInCart = (id) => products.some((producto) => producto.item.id === id);

  const isCartEmpty = () => products.length === 0;

  const numberOfItemsInCart = () =>
    products.reduce((numberOfItems, product) => {
      numberOfItems += product.quantity;
      return numberOfItems;
    }, 0);

  const getOrder = () => {
    const items = products.map(({ item, quantity }) => ({
      id: item.id,
      title: item.title,
      price: item.price,
    }));

    const total = products.reduce((tot, cartItem) => {
      tot = tot + cartItem.item.price * cartItem.quantity;
      return tot;
    }, 0);

    return {
      buyer: {
        name: "Cecilia",
        phone: "+54 9 351 2297095",
        email: "ceci_mol87@hotmail.com",
      },
      items,
      date: Timestamp.fromDate(new Date()),
      total,
    };
  };

  return (
    <CartContext.Provider
      value={{
        products,
        addItem,
        removeItem,
        clear,
        isInCart,
        isCartEmpty,
        numberOfItemsInCart,
        getOrder,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};
