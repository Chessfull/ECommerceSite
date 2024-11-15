import Navbar from "../../components/Header/Navbar";
import ProductList from "../../components/Product/ProductList";

const Admin = () => {
  return (
    <div>
      <Navbar/>
      <ProductList pageVersion="admin" /*sending page version (user-admin(delete-edit button added)) as prop to productlist*/ />
    </div>
  );
};

export default Admin;
