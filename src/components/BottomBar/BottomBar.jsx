import { useEffect, useState } from "react";
import "./BottomBar.css";

export default function BottomBar({ selectedId, onSelectSkip }) {
  const [skipData, setSkipData] = useState(null);

  useEffect(() => {
    async function fetchSkips() {
      if (!selectedId) {
        setSkipData(null);
        return;
      }

      try {
        const res = await fetch(
          "https://app.wewantwaste.co.uk/api/skips/by-location?postcode=NR32&area=Lowestoft"
        );
        const data = await res.json();

        const foundSkip = data.find((skip) => skip.id === selectedId);
        setSkipData(foundSkip || null);
      } catch (error) {
        console.error("Error fetching skips:", error);
        setSkipData(null);
      }
    }

    fetchSkips();
  }, [selectedId]);

  return (
    <div className="bottom-bar">
      {skipData ? (
        <>
          <p className="info">
            Imagery and information shown throughout this website may not
            reflect the exact shape or size specification, colours may vary,
            options and/or accessories may be featured at additional cost.
          </p>
          <div className="skip-container-info">
            <div className="skip-info">
              <p className="skip-title">{skipData.size} Yard Skip</p>
              <div className="skip-separator">
                <p className="skip-price">£{skipData.price_before_vat} </p>
                <span className="skip-period">
                  {skipData.hire_period_days} day hire
                </span>
              </div>
            </div>
            <div className="button-group">
              <button
                className="btn back-btn"
                onClick={() => onSelectSkip(skipData.id)}
              >
                Back
              </button>
              <button className="btn continue-btn">Continue →</button>
            </div>
          </div>
        </>
      ) : (
        <p style={{ color: "#fff" }}>Loading skip data...</p>
      )}
    </div>
  );
}
