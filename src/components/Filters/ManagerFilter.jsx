import { useEffect, useState } from "react";
import { FakeStoreApi } from "../../services/FakeStoreApi";
import CategoryFilter from "./Category";
import RatingFilter from "./Rating";
import PriceFilter from "./Price";

const api = new FakeStoreApi();

const Filter = ({ updateCategories, updateRatings, updatePrice }) => {

  const [selectedCategories, setSelectedCategories] = useState([]);
  const [selectedRatings, setSelectedRatings] = useState([]);
  const [selectedPrice, setSelectedPrice] = useState(0);

  useEffect(() => {
    // ▼ I manage filter operations below ▼
    updateCategories(selectedCategories); 
    updateRatings(selectedRatings);
    updatePrice(selectedPrice);
  }, [
    selectedCategories,
    selectedRatings,
    selectedPrice,
    updateCategories,
    updateRatings,
    updatePrice,
  ]);

  const handleCategoryChange = (category) => {

     // ▼ Find selected categories coming from category.jsx and set ▼
    setSelectedCategories((selectedCategories) => {
      if (selectedCategories.includes(category)) {
        return selectedCategories.filter((item) => item !== category);
      } else {
        return [...selectedCategories, category];
      }
    });
  };

  const handleRatingChange = (rating) => {

    // ▼ Find selected ratings coming from rating.jsx and set ▼
    setSelectedRatings((selectedRatings) => {
      if (selectedRatings.includes(rating)) {
        return selectedRatings.filter((item) => item !== rating);
      } else {
        return [...selectedRatings, rating];
      }
    });
  };

  const handlePriceChange = (priceValue) => {
    setSelectedPrice(priceValue);
  };

  return (
    <>
    <aside className="filter-area">
      <CategoryFilter className="filter-checkboxes" value="" onCategoryChange={handleCategoryChange} />
      <RatingFilter className="filter-checkboxes" onRatingChange={handleRatingChange} />
      <PriceFilter className="" onPriceChange={handlePriceChange} />
      </aside>
    </>
  );
};

export default Filter;
