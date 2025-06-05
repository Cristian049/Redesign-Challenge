import "./Skip.css";

export default function Skip({ skip, onSelectSkip, selectedId }) {
  return (
    <div
      className={`skip-container 
    ${!skip.allows_heavy_waste ? "disabled" : ""} 
    ${selectedId === skip.id ? "focused" : ""}
  `}
      onClick={() => {
        if (skip.allows_heavy_waste) onSelectSkip(skip.id);
      }}
      tabIndex={0}
    >
      <div className="image-container">
        <img src="/images/5-yarder-skip.jpg" />
        <span className="yards-icon">{skip.size} Yards</span>
        {!skip.allows_heavy_waste && (
          <span className="heavy">Not Suitable for Heavy Waste</span>
        )}
        {!skip.allowed_on_road && (
          <span
            className={`not-allowed ${
              !skip.allows_heavy_waste ? "raised" : ""
            }`}
          >
            Not Allowed On The Road
          </span>
        )}
      </div>
      <div className="content-container">
        <div className="upper-content">
          <h2 className="head-content">{skip.size} Yard Skip</h2>
          <p className="days-content">
            {skip.hire_period_days} days hire period
          </p>
          <h3 className="price-content">£{skip.price_before_vat}</h3>
        </div>
        <button
          className={`select-yard ${selectedId === skip.id ? "selected" : ""}`}
        >
          {selectedId === skip.id ? "Selected" : "Select This Skip"}
        </button>
      </div>
    </div>
  );
}
