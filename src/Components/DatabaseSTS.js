import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

function DatabaseSTS() {
  const [databaseName, setDatabaseName] = useState("");
  const [userName, setUserName] = useState("");

  const [hostName, setHostName] = useState("");
  const [port, setPort] = useState("");
  const [sqlTuningSet, setSqlTuningSet] = useState("");
  const [data, setData] = useState("Success");
  const [showOverlay, setShowOverlay] = useState(false);

  const navigate = useNavigate();

  const [selectedCard, setSelectedCard] = useState(null);

  const handleSubmit = (event) => {
    event.preventDefault();
    setSelectedCard(true);
  };

  return (
    <div className="form-container">
      <div className="form">
        <form onSubmit={handleSubmit}>
          <th>Load SQL Tuning Set by Database:</th>
          <br />
          <Link to="/load-sts">
            <button
              className="btn-cross btn-cross-form"
              onClick={() => setSelectedCard(null)}
            >
              X
            </button>
          </Link>
          <br />
          <br />

          <div className="form-row">
            <label htmlFor="userName" className="form-label">
              Username:
            </label>
            <input
              type="text"
              className="form-input"
              id="userName"
              value={userName}
              required
              onChange={(e) => setUserName(e.target.value)}
            />
          </div>

          <div className="form-row">
            <label htmlFor="sqlTuningSet" className="form-label">
              SQL Tuning Set Name:
            </label>
            <input
              type="text"
              className="form-input"
              id="stsName"
              required
              value={sqlTuningSet}
              onChange={(e) => setSqlTuningSet(e.target.value)}
            />
          </div>
          <br />
          <button type="submit" className="btn btn-block">
            Load STS
          </button>
          <br />
        </form>
      </div>
      {selectedCard !== null && (
        <div className="modal">
          <div className="modal-content">
            <button className="btn-cross" onClick={() => setSelectedCard(null)}>
              X
            </button>
            <h2>Load STS Success!!!</h2>
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

export default DatabaseSTS;
