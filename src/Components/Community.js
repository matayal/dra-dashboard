import React, { useState } from "react";
import DetermineCommunity from "./DetermineCommunity";
import { Link } from "react-router-dom";

function Community() {
  const data = [
    { graphName: "Graph 1", stsName: "Tuning Set 1" },
    { graphName: "Graph 2", stsName: "Tuning Set 1" },
  ];

  const [determineCommunity, setDetermineCommunity] = useState(null);
  const [refineCommunity, setRefineCommunity] = useState(false);

  const handleCommunityDetection = (event) => {
    event.preventDefault();
    setDetermineCommunity(true);
  };

  return (
    <div className="form-container">
      <div className="form">
        <h4>Community</h4>
        <br />
        <br />
        <br />
        <table className="table">
          <thead>
            <tr className="tr">
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
                  <button className="btn" onClick={handleCommunityDetection}>
                    Community Detection
                  </button>
                  &emsp; &emsp; &emsp;
                  <button
                    className="btn-red"
                    onClick={() => setRefineCommunity(true)}
                  >
                    Refine Community
                  </button>
                </td>
              </tr>
            ))}
          </tbody>{" "}
        </table>
      </div>
      {determineCommunity && (
        <div className="modal">
          <div className="modal-content auto">
            <button
              className="btn-cross"
              onClick={() => setDetermineCommunity(null)}
            >
              X
            </button>
            <DetermineCommunity />
          </div>
        </div>
      )}
      {refineCommunity && (
        <div>
          <Link to="/refine-community">
            <button
              className="btn-cross"
              onClick={() => setRefineCommunity(false)}
            >
              X
            </button>
          </Link>
        </div>
      )}
    </div>
  );
}

export default Community;
