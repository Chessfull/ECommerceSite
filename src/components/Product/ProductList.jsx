import React, { useEffect, useState } from "react";
import { FakeStoreApi } from "../../services/FakeStoreApi";
import "./ProductList.css";
import FilterManager from "../Filters/ManagerFilter";
import EditModal from "../Modals/EditModal";
import DeleteModal from "../Modals/DeleteModal";

const api = new FakeStoreApi(); // Instance of api that I will use from service

const ProductList = ({ pageVersion, onAddToCart }) => {
  
  const [products, setProducts] = useState([]);
  const [selectedCategories, setSelectedCategories] = useState([]);
  const [selectedRatings, setSelectedRatings] = useState([]);
  const [selectedPrice, setSelectedPrice] = useState(0);

  // ▼ State hooks for Modals
  const [showEditModal, setShowEditModal] = useState(false);
  const [currentProduct, setCurrentProduct] = useState(null);
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [productToDelete, setProductToDelete] = useState(null);

  useEffect(() => {
    const fetchProducts = async () => {
      const products = await api.getProducts(); // -> Getting products from service
      if (products) {
        setProducts(products);
      }
    };
    fetchProducts(); // -> Use in useffect for rendering
  }, []);

  // ▼ I will get selected filters from Filter component here with props ▼
  const updateCategories = (categories) => setSelectedCategories(categories);
  const updateRatings = (ratings) => setSelectedRatings(ratings);
  const updatePrice = (price) => setSelectedPrice(price);

  // ▼ In this part I m filtering products according to getting props from Filter ▼
  const filteredProducts = products.filter((product) => {
    // If category selected get filter according
    const categoryMatch = selectedCategories.length
      ? selectedCategories.includes(product.category)
      : true;

    // If rating selected get filter according
    const ratingMatch = selectedRatings.length
      ? product.rating.rate >= Math.min(...selectedRatings)
      : true;

    // If price selected get filter according
    const priceMatch = selectedPrice ? product.price >= selectedPrice : true;

    return categoryMatch && ratingMatch && priceMatch;
  });

  const addingCart = () => onAddToCart(); // -> This is for shopping cart count

  const editProduct = (product) => {
    setCurrentProduct(product); // -> For editing modal screen sending product will be edited
    setShowEditModal(true); // -> This is toggle for edit modal
  };

  const saveProduct = (updatedProduct) => {
    setProducts((prevProducts) =>
      prevProducts.map((product) =>
        product.id === updatedProduct.id ? updatedProduct : product
      ) // -> Finding saved product 
    );
    setShowEditModal(false); // -> This is toggle for edit modal
  };

  const deleteProduct = () => {
    setProducts((prevProducts) =>
      prevProducts.filter((product) => product.id !== productToDelete.id)
    ); // -> Finding undeleted products
    setShowDeleteModal(false); // -> This is toggle for delete modal
  };

  return (
    <>
      <div className="container-filter-products">
        <FilterManager
        // ▼ Props coming from filter manager 
          updateCategories={updateCategories}
          updateRatings={updateRatings}
          updatePrice={updatePrice}
        />
        <div className="product-card-container">
          {filteredProducts.map((product) => (
            <div key={product.id} className="product-card">
              <img
                className="product-image"
                src={product.image}
                alt={product.title}
              />
              <h1 className="product-title">{product.title}</h1>
              <p className="product-description">{product.description}</p>
              <p className="product-rating">
                Rating: <span className="fa fa-star checked"></span>{" "}
                {product.rating.rate} ({product.rating.count})
              </p>
              <p className="product-price">
                Price: ${product.price.toFixed(2)}
              </p>

              {pageVersion === "user" && (
                <button
                  className="button-add-to-cart"
                  type="button"
                  onClick={addingCart}
                >
                  Add to cart
                </button>
              )}

              {pageVersion === "admin" && (
                <div className="edit-delete-buttons">
                  <button
                    id="edit-button"
                    type="button"
                    onClick={() => editProduct(product)}
                  >
                    Edit
                  </button>
                  <button
                    id="delete-button"
                    type="button"
                    onClick={() => {
                      setProductToDelete(product);
                      setShowDeleteModal(true); 
                    }}
                  >
                    Delete
                  </button>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>

      {showEditModal && currentProduct && (
        <EditModal
          product={currentProduct}
          onClose={() => setShowEditModal(false)}
          onSave={saveProduct}
        />
      )}

      {showDeleteModal && (
        <DeleteModal
          onConfirm={deleteProduct}
          onCancel={() => setShowDeleteModal(false)}
        />
      )}
    </>
  );
};

export default ProductList;
