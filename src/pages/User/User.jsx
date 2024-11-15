import { useState } from "react";
import Navbar from "../../components/Header/Navbar";
import ProductList from "../../components/Product/ProductList";
import "./User.css";

const User = () => {
  const [cartCount, setCartCount] = useState(0); // -> For showing product count at cart triggered with 'add to chart' button, sending as prop to navbar

  const handleAddToCart = () => {
    setCartCount(cartCount + 1);
  };

  return (
    <div>
      <Navbar pageVersion="user" cartCount={cartCount} />
      <ProductList pageVersion="user" /*sending page version (user-admin(delete-edit button added)) as prop to productlist*/ onAddToCart={handleAddToCart} />
    </div>
  );
};

export default User;
