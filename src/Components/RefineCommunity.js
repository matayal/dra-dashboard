import React, { useState } from "react";
import { Link } from "react-router-dom";

function RefineCommunity() {
  const [values, setValues] = useState([]);
  const [source, setSource] = useState("");
  const [destination, setDestination] = useState("");
  const [affinity, setAffinity] = useState("");
  const [selectedCard, setSelectedCard] = useState(null);

  const handleAdd = () => {
    const newValues = [...values];
    newValues.push({ source, destination, affinity });
    setValues(newValues);
    setSource("");
    setDestination("");
    setAffinity("");
  };

  const handleSourceChange = (event) => {
    setSource(event.target.value);
  };

  const handleDestinationChange = (event) => {
    setDestination(event.target.value);
  };

  const handleAffinityChange = (event) => {
    setAffinity(event.target.value);
  };

  const handleRefine = () => {
    // code for refining the values
  };

  return (
    <div className="form-container">
      <div className="form">
        <h4>Refine Community:</h4>

        <div style={{ display: "flex" }}>
          <Link to="/community">
            <button
              className="btn-cross btn-cross-form"
              onClick={() => setSelectedCard(null)}
            >
              X
            </button>
          </Link>
          <br />
          <br />
          <div>
            <br />
            <br />

            <br />
            <div className="form-row">
              <label htmlFor="source" className="form-label">
                Select the Source Entity:
              </label>
              <select
                className="form-input"
                id="source"
                value={source}
                required
                onChange={(e) => setSource(e.target.value)}
              >
                <option value="">-- Select a source entity --</option>
                <option value="A">A</option>
                <option value="B">B</option>
                <option value="C">C</option>
              </select>
            </div>
            <div className="form-row">
              <label htmlFor="destination" className="form-label">
                Select the Destination Entity:
              </label>
              <select
                className="form-input"
                id="destination"
                value={destination}
                required
                onChange={(e) => setDestination(e.target.value)}
              >
                <option value="">-- Select a destination entity --</option>
                <option value="A">A</option>
                <option value="B">B</option>
                <option value="C">C</option>
              </select>
            </div>
            <div className="form-row">
              <label htmlFor="affinity" className="form-label">
                Enter the Affinity value(0-1):
              </label>
              <input
                type="text"
                className="form-input"
                id="affinity"
                required
                value={affinity}
                onChange={(e) => setAffinity(e.target.value)}
              />
            </div>
            <br />
            <div className="form-row">
              <button type="submit" className="btn" onClick={handleAdd}>
                +ADD
              </button>
            </div>
          </div>
          <div>
            <br />
            <br />

            <br />
            <table className="table">
              <thead>
                <tr className="tr">
                  <th style={{ backgroundColor: "#41afca", color: "#f1f5f9" }}>
                    Source
                  </th>
                  <th style={{ backgroundColor: "#41afca", color: "#f1f5f9" }}>
                    Destination
                  </th>
                  <th style={{ backgroundColor: "#41afca", color: "#f1f5f9" }}>
                    Affinity Values
                  </th>
                </tr>
              </thead>
              <tbody>
                {values.map((value, index) => (
                  <tr key={index}>
                    <td>{value.source}</td>
                    <td>{value.destination} </td>
                    <td>{value.affinity}</td>
                  </tr>
                ))}
              </tbody>
            </table>

            {values !== null && (
              <button className="btn" onClick={handleRefine}>
                Refine
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default RefineCommunity;
