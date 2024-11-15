import { useState, useEffect } from "react";
import { FakeStoreApi } from "../../services/FakeStoreApi";
import "./Price.css"


const api = new FakeStoreApi(); // Instance of api that I will use


const PriceFilter = ({onPriceChange}) => {

  const [priceValue, setPriceValue] = useState(0);
  const [priceRangeMin, setPriceRangeMin] = useState(0);
  const [priceRangeMax, setPriceRangeMax] = useState(0);

  useEffect(() => {
    const fetchPriceRange = async () => {
      const products = await api.getProducts(); // -> Getting products from service
      const prices = products.map((product) => product.price);

      const priceRangeMin = Math.min(...prices);
      const priceRangeMax = Math.max(...prices);

       // -> For slider settings
      setPriceRangeMin(priceRangeMin);
      setPriceRangeMax(priceRangeMax);
      setPriceValue(priceRangeMin)
    };

    fetchPriceRange();
  }, []);

  const handleChange = (event) => {
    const priceValue=event.target.value;
    setPriceValue(priceValue);
    onPriceChange(priceValue); /* Following price silder for filter operations - onpricechange is coming from managerfilter.jsx where I manage filter operations there */
  };

  return (
    <>
    <div className="filter-checkboxes price-range">
      <h3>Price</h3>
      <span id="slider-price-value">${parseFloat(priceValue).toFixed(0)}</span>
      <input
        type="range"
        min={priceRangeMin}
        max={priceRangeMax}
        value={priceValue}
        onChange={handleChange} 
        className="slider"
        id="priceRange"
      />
      </div>
    </>
  );
};

export default PriceFilter;
