import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function DatabaseSTS() {
  const [databaseName, setDatabaseName] = useState("");
  const [hostName, setHostName] = useState("");
  const [port, setPort] = useState("");
  const [sqlTuningSet, setSqlTuningSet] = useState("");

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    // if (!name || !email) return;
    alert("congrats!");
    //callAPI
    navigate("/load-sts");
  };

  return (
    <section className="section">
      <form onSubmit={handleSubmit}>
        {/* <h4>Database Details:</h4> */}
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <div className="form-row">
          <label htmlFor="databaseName" className="form-label">
            Database name:
          </label>
          <input
            type="text"
            className="form-input"
            id="databaseName"
            value={databaseName}
            required
            onChange={(e) => setDatabaseName(e.target.value)}
          />
        </div>
        <div className="form-row">
          <label htmlFor="hostName" className="form-label">
            Host name:
          </label>
          <input
            type="text"
            className="form-input"
            id="hostName"
            required
            value={hostName}
            onChange={(e) => setHostName(e.target.value)}
          />
        </div>
        <div className="form-row">
          <label htmlFor="port" className="form-label">
            Port:
          </label>
          <input
            type="number"
            className="form-input"
            id="port"
            value={port}
            required
            onChange={(e) => setPort(e.target.value)}
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
        <br />
        <br />
        <br />
      </form>
    </section>
  );
}

export default DatabaseSTS;
