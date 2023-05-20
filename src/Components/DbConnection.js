import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function DbConnection() {
  const [databaseName, setDatabaseName] = useState("");
  const [userName, setUserName] = useState("");
  const [hostName, setHostName] = useState("");
  const [port, setPort] = useState("");
  const [url, setUrl] = useState("");

  const [connectButton, setConnectButton] = useState(null);

  const handleSubmit = (event) => {
    event.preventDefault();
    setConnectButton(true);
  };

  return (
    <div className="form-container">
      <div className="form">
        <form onSubmit={handleSubmit}>
          <h4>Database Details:</h4>
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
            <label htmlFor="hostName" className="form-label">
              Hostname:
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
            <label htmlFor="url" className="form-label">
              URL:
            </label>
            <input
              type="text"
              className="form-input"
              id="url"
              value={url}
              onChange={(e) => setUrl(e.target.value)}
            />
          </div>
          <br />
          <button type="submit" className="btn btn-block">
            Connect
          </button>
          <br />
        </form>
      </div>
      {connectButton !== null && (
        <div className="modal">
          <div className="modal-content">
            <button
              className="btn-cross"
              onClick={() => setConnectButton(null)}
            >
              X
            </button>
            <h2>Connection created!!!</h2>
            <button
              className="btn"
              style={{
                width: "140px",
                height: "40px",
                margin: "20px 20px 20px 200px",
              }}
              onClick={() => setConnectButton(null)}
            >
              OK
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default DbConnection;
