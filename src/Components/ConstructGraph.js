import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function ConstructGraph() {
  const [stsName, setStsName] = useState("");
  const [graphName, setGraphName] = useState("");
  const [selectedCard, setSelectedCard] = useState(null);

  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();
    setSelectedCard(true);
  };
  return (
    <div className="form-container">
      <div className="form">
        <form onSubmit={handleSubmit}>
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
      </div>
      {selectedCard !== null && (
        <div className="modal">
          <div className="modal-content">
            <button className="btn-cross" onClick={() => setSelectedCard(null)}>
              X
            </button>
            <h2>Graph Constructed!!!</h2>
            <button
              className="btn"
              style={{
                width: "140px",
                height: "40px",
                margin: "20px 20px 20px 200px",
              }}
              onClick={() => setSelectedCard(null)}
            >
              OK
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default ConstructGraph;
