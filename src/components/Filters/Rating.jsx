import "./Rating.css"

const RatingFilter = ({onRatingChange}) => { /* Following rating checkboxes for filter operations - onratingchange is coming from managerfilter.jsx where I manage filter operations there */
    return (
      <>
        <h3>Rating</h3>
        <div className="rating-stars">
          <input id="five-star" type="checkbox" className="rating-checkbox" value={5} onChange={(event) => onRatingChange(event.target.value)} />
          <span className="fa fa-star checked"></span>
          <span className="fa fa-star checked"></span>
          <span className="fa fa-star checked"></span>
          <span className="fa fa-star checked"></span>
          <span className="fa fa-star checked"></span>
        </div>
        <div className="rating-stars">
          <input id="four-star" type="checkbox" className="rating-checkbox" value={4} onChange={(event) => onRatingChange(event.target.value)} />
          <span className="fa fa-star checked"></span>
          <span className="fa fa-star checked"></span>
          <span className="fa fa-star checked"></span>
          <span className="fa fa-star checked"></span>
          <span className="fa fa-star"></span>
        </div>
        <div className="rating-stars">
          <input id="three-star" type="checkbox" className="rating-checkbox" value={3} onChange={(event) => onRatingChange(event.target.value)} />
          <span className="fa fa-star checked"></span>
          <span className="fa fa-star checked"></span>
          <span className="fa fa-star checked"></span>
          <span className="fa fa-star"></span>
          <span className="fa fa-star"></span>
        </div>
        <div className="rating-stars">
          <input id="two-star" type="checkbox" className="rating-checkbox" value={2} onChange={(event) => onRatingChange(event.target.value)} />
          <span className="fa fa-star checked"></span>
          <span className="fa fa-star checked"></span>
          <span className="fa fa-star"></span>
          <span className="fa fa-star"></span>
          <span className="fa fa-star"></span>
        </div>
        <div className="rating-stars">
          <input id="one-star" type="checkbox" className="rating-checkbox" value={1} onChange={(event) => onRatingChange(event.target.value)} />
          <span className="fa fa-star checked"></span>
          <span className="fa fa-star"></span>
          <span className="fa fa-star"></span>
          <span className="fa fa-star"></span>
          <span className="fa fa-star"></span>
        </div>
      </>
    );
  };
  
  
  export default RatingFilter;