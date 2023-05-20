import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function ConstructSTS() {
  const [stsName, setStsName] = useState("");
  const [graphName, setGraphName] = useState("");

  const [data, setData] = useState("Success");

  const navigate = useNavigate();

  const [showOverlay, setShowOverlay] = useState(false); // Add state for the overlay
  const [showPopup, setShowPopup] = useState(false); // Add state for the popup

  const handleDbStsSubmit = (event) => {
    event.preventDefault();
    fetch("http://localhost:8080/dra/items", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        /* pass any required data as the request body */
      }),
    })
      .then((response) => response.json())
      .then((data) => {
        setData(data);
        setShowPopup(true); // show the popup when data is received
      })
      .catch((error) => console.error(error));
  };

  return (
    <section className="section">
      <form onSubmit={handleDbStsSubmit} className="form">
        <h4>Construct Graph</h4>
        <br />
        <br />
        <br />
        <div className="form-row">
          <label htmlFor="stsName" className="form-label">
            Select the SQL Tuning Set:
          </label>
          <select
            className="form-input"
            id="stsName"
            value={stsName}
            required
            onChange={(e) => setStsName(e.target.value)}
          >
            <option value="">-- Select a tuning set --</option>
            <option value="tuningSet1">Tuning Set 1</option>
            <option value="tuningSet2">Tuning Set 2</option>
            <option value="tuningSet3">Tuning Set 3</option>
          </select>
        </div>
        <div className="form-row">
          <label htmlFor="graphName" className="form-label">
            Enter the Graph name:
          </label>
          <input
            type="text"
            className="form-input"
            id="graphName"
            required
            value={graphName}
            onChange={(e) => setGraphName(e.target.value)}
          />
        </div>

        <br />
        <button type="submit" className="btn btn-block">
          Construct Graph
        </button>
        <br />
        <br />
        <br />
        <br />
      </form>
    </section>
  );
}

export default ConstructSTS;
