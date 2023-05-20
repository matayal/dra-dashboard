import React, { useState } from "react";
import { Link } from "react-router-dom";
import ViewGraph from "./ViewGraph";

function GraphComponent() {
  const data = [
    { graphName: "Graph 1", stsName: "Tuning Set 1" },
    { graphName: "Graph 2", stsName: "Tuning Set 1" },
    { graphName: "Graph 3", stsName: "Tuning Set 2" },
  ];
  const [viewButton, setViewButton] = useState(null);
  const [deleteButton, setDeleteButton] = useState(null);

  const handleViewClick = (event) => {
    event.preventDefault();
    setViewButton(true);
  };

  const handleDeleteClick = (event) => {
    event.preventDefault();
    setDeleteButton(true);
  };

  return (
    <div className="form-container">
      <div className="form">
        <h4>Graph</h4>
        <br />
        <br />
        <br />
        <table className="table">
          <thead>
            <tr>
              <th style={{ backgroundColor: "#41afca", color: "#f1f5f9" }}>
                Graph Name
              </th>
              <th style={{ backgroundColor: "#41afca", color: "#f1f5f9" }}>
                STS Name
              </th>
              <th style={{ backgroundColor: "#41afca", color: "#f1f5f9" }}>
                Actions
              </th>
            </tr>
          </thead>
          <tbody>
            {data.map((dra, index) => (
              <tr key={index}>
                <td>{dra.graphName}</td>
                <td>{dra.stsName}</td>
                <td>
                  <Link to="/viewGraph">
                    <button className="btn" onClick={handleViewClick}>
                      View Graph
                    </button>
                  </Link>
                  &emsp; &emsp; &emsp;
                  <button className="btn-red" onClick={handleDeleteClick}>
                    Delete Graph
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        <br />
      </div>
      {viewButton !== null && (
        <div className="modal">
          <div className="modal-content auto">
            <button className="btn-cross" onClick={() => setViewButton(null)}>
              X
            </button>
            <ViewGraph />
          </div>
        </div>
      )}
      {deleteButton !== null && (
        <div className="modal">
          <div className="modal-content">
            <button className="btn-cross" onClick={() => setDeleteButton(null)}>
              X
            </button>
            <h2>Graph Deleted!!!</h2>

            <button
              className="btn"
              style={{
                width: "140px",
                height: "40px",
                margin: "20px 20px 20px 200px",
              }}
              onClick={() => setDeleteButton(null)}
            >
              OK
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default GraphComponent;
