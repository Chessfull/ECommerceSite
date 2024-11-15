import React, { useState } from "react";
import "./Modal.css"

const EditModal = ({ product, onClose, onSave }) => { // -> Props coming from product.jsx
  
  const [editedProduct, setEditedProduct] = useState(product);

  const handleChange = (e) => {
   
    const { name, value } = e.target; // -> Getting name and value from input action
    setEditedProduct((prevProduct) => ({
      ...prevProduct,
      [name]: value,
    }));

  };

  const handleSubmit = (e) => {
    e.preventDefault(); // -> For avoiding default post action
    onSave(editedProduct);  // -> Sending editedproduct to product.jsx with onsave prop
  };

  return (
    <div className="edit-modal">
      <div className="edit-modal-container">
        <span className="close" onClick={onClose}>&times;</span>
        <form className="edit-form" onSubmit={handleSubmit}>
          <img id="form-modal-image" src={editedProduct.image} alt={editedProduct.title} />
          <label htmlFor="form-modal-title">Product Title</label>
          <input
            value={editedProduct.title}
            type="text"
            name="title"
            id="form-modal-title"
            onChange={handleChange}
          />
          <label htmlFor="form-modal-description">Product Description</label>
          <input
            value={editedProduct.description}
            type="text"
            name="description"
            id="form-modal-description"
            onChange={handleChange}
          />
          <label htmlFor="form-modal-rating">Rating</label>
          <input
            value={editedProduct.rating.rate}
            type="number"
            name="rating"
            id="form-modal-rating"
            onChange={handleChange}
          />
          <label htmlFor="form-modal-price">Price</label>
          <input
            value={editedProduct.price}
            type="number"
            name="price"
            id="form-modal-price"
            onChange={handleChange}
          />
          <button id="form-modal-save-button" type="submit">Save</button>
        </form>
      </div>
    </div>
  );
};

export default EditModal;
