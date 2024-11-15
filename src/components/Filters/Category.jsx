import { useEffect, useState } from "react";
import { FakeStoreApi } from "../../services/FakeStoreApi";
import "./Category.css";

const api = new FakeStoreApi();

const CategoryFilter = ({ onCategoryChange }) => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    const fetchCategories = async () => {
      const products = await api.getProducts(); // -> Getting products from service
      const categories = products.map((product) => product.category);
      const uniqueCategories = [...new Set(categories)]; // -> For making 'unique' values from categories
      setCategories(uniqueCategories);
    };

    fetchCategories();
  }, []);

  return (
    <div className="filter-checkboxes category">
      <h3>Category</h3>
      {categories.map((category) => (
        <label key={category} className="category-label">
          <input
            className="category-checkbox"
            type="checkbox"
            onChange={() =>
              onCategoryChange(category)
            } /* Following category checkboxes for filter operations - oncategorychange is coming from managerfilter.jsx where I manage filter operations there */
          />
          {category}
        </label>
      ))}
    </div>
  );
};

export default CategoryFilter;
