import { NavLink } from "react-router-dom"; 
import "./Navbar.css"

function Navbar({pageVersion,cartCount}) { /*getting page version (user-admin(no need shopping cart)) as prop*/
  return (
    <div className="navbar">

      <div className="navigations">
        <NavLink
          to="/user"
          className={({ isActive }) => (isActive ? "active-link" : "")} /* For active link view I Used navlink from router-dom*/
        >
          User Products
        </NavLink>
        <NavLink
          to="/admin"
          className={({ isActive }) => (isActive ? "active-link" : "")} /* For active link view I Used navlink from router-dom*/
        >
          Admin Products
        </NavLink>
      </div>

    {pageVersion === "user" && (<div className="shopping-cart"> 
        <NavLink id="shopping-cart" to="">
          <i id="shopping-cart-icon" className="fas fa-shopping-cart"></i>Your Cart
          <span id="cart-count">{cartCount}</span>
        </NavLink>
      </div>) }
      
    </div>
  );
}

export default Navbar;
